// @ts-nocheck
import React, { useEffect } from "react";
import axios from "axios";
import { styles } from "./style";
import { useState } from "react";
import Newanswer from "./Newanswer";
import Dropdown from "../Dropdown";
import Reanswer from "../Reanswer";
import { QuestionApi } from "src/api/question.controller";
import { useRecoilValue } from "recoil";
import Childnewanswer from "./Childnewanswer";
import { accesstokenState, userIdState } from "../../atom/atoms";

function Answer({ content, userId, answerId, like }) {//props로 답변 내용을 전달받음(값 그대로 와서 가공할 필요X)
    const [view, setView] = useState(false);
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isBlurred, setIsBlurred] = useState(true);
    const [reanswerList, setReanswerList] = useState([answerId]);
    const [answerCount, setAnswerCount] = useState('')
    const [fixClick, setFixClick] = useState(false)
    const [answerText, setAnswerText] = useState(content);
    const LuserId = useRecoilValue(userIdState)
    const accesstoken = useRecoilValue(accesstokenState)
    console.log(accesstoken)
    const onChangeText = (event) => {
        setAnswerText(event.target.value);
    }

    const handleCheckBtn = () => {
        setIsBtnClicked(true);
        setAnswerOfAnswer(true);
        setIsBlurred(false);
    };
    useEffect(() => {
        reanswerRequest()
    }, [])
    const postLike = async () => {
        try {
            const apiUrl = `http://52.78.248.199:8080/answers/${answerId}/users/${6}`;

            const headers = {
                accessToken: accesstoken
            }
            const response = await axios.post(apiUrl, null, { headers });

            console.log('POST 요청 성공:', response.data);
        } catch (error) {
            console.error('POST 요청 실패:', error);
        }
    };
    const handleClickLike = async () => {
        await postLike();
        window.location.reload()
    };

    const reanswerRequest = async () => {
        try {
            const response = await QuestionApi.findChildAnswer(answerId, 0, 5);
            console.log(response)
            setReanswerList(response.result.childAnswerList)
            setAnswerCount(response.result.totalElements)
        } catch (error) {
            console.error("통신에러", error)
        }
    }
    return (
        <div style={{ position: 'relative' }}>
            {isBtnClicked ? null : (
                <button onClick={handleCheckBtn} style={{ order: '-1', position: 'absolute', top: '50%', left: '42%', ...styles.answer_button, zIndex: '1000' }}>
                    눌러서 답변 확인
                </button>
            )}
            <div style={styles.question_main}>
                <div style={styles.profile_box}><div style={styles.profile_img}></div></div>
                <div style={styles.question_main2}>
                    <div style={styles.question_main3}>
                        {isBtnClicked ?
                            <ul onClick={() => { setView(!view) }} style={styles.dropdownbtn}>⋮
                                {view && (
                                    <div style={{ background: 'white', border: '1px solid #000' }}>
                                        <li onClick={() => { setFixClick(true) }} style={{ order: '-1', height: '25px', width: "100px" }}>수정하기</li>
                                        <li style={{ order: '-1', height: '25px', width: "100px" }}>신고하기</li>
                                    </div>
                                )}
                            </ul> : null}
                    </div>
                    <h3 style={styles.question_title}>{userId}</h3>
                </div>
            </div>
            {fixClick ?
                <div>
                    <div style={{ ...styles.inputBox, background: "#D9D9D9" }}>
                        <textarea
                            placeholder="답변을 입력해주세요."
                            style={styles.inputBox2}
                            onChange={onChangeText}
                        />
                    </div>
                </div> :
                <div style={{ margin: '15px', minHeight: '10vh', filter: isBlurred ? 'blur(5px)' : 'none' }}>
                    {content}
                </div>}
            {answerOfAnswer && (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '3%' }}>
                        <div style={{ marginRight: '1%' }}>💬{answerCount}</div>
                        <div onClick={handleClickLike}>👍{like}</div>
                    </div>
                    {reanswerList && reanswerList.length > 0 ? (
                        <div>
                            {reanswerList.map((reanswer, index) => reanswer.content && reanswer.content.length > 0 ? (
                                <Reanswer key={index} content={reanswer.content} userId={reanswer.nickname} answerId={answerId} />
                            ) : null)}
                            <Childnewanswer answerId={answerId} />{/* answerGroup에 부모답변 id입력 */}
                        </div>
                    ) : (<Childnewanswer answerId={answerId} />)}
                </div>
            )}
        </div >
    );
}

export default Answer;
