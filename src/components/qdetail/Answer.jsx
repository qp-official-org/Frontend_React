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
import { accesstokenState, userIdState, loginState } from "../../atom/atoms";

function Answer({ qId, content, userNickname, answerId, like, userId }) {//props로 답변 내용을 전달받음(값 그대로 와서 가공할 필요X)
    const [view, setView] = useState(false);
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isBlurred, setIsBlurred] = useState(true);
    const [reanswerList, setReanswerList] = useState([answerId]);
    const [answerCount, setAnswerCount] = useState('')
    const [fixClick, setFixClick] = useState(false)
    const [answerText, setAnswerText] = useState(content);
    const [clickLike, setClickLike] = useState(false)
    const LuserId = useRecoilValue(userIdState)
    const accesstoken = useRecoilValue(accesstokenState)
    const ls = useRecoilValue(loginState)
    const [totalLike, setTotalLike] = useState(like)
    console.log("로그인 되어있는지", ls)
    console.log("토큰", accesstoken)
    const handleCheckBtn = () => {
        if (ls) {
            setIsBtnClicked(true);
            setAnswerOfAnswer(true);
            setIsBlurred(false);
        } else {
            alert("로그인이 필요합니다.");
        }
    };
    useEffect(() => {
        reanswerRequest()
    }, [])
    const postLike = async () => {
        try {
            const apiUrl = `http://52.78.248.199:8080/answers/${answerId}/users/${LuserId}`;

            const headers = {
                accessToken: accesstoken
            }
            const response = await axios.post(apiUrl, null, { headers });
            console.log('POST 요청 성공:', response.data);
            if (response.data.result.answerLikeStatus == "ADDED") {
                setTotalLike(totalLike + 1)
            } else {
                setTotalLike(totalLike - 1)
            }
        } catch (error) {
            console.error('POST 요청 실패:', error);
        }
    };
    const handleClickLike = async () => {
        await postLike();
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
    const handleSubmit = () => {
        fixAnswer()
        window.location.reload()
    }
    const fixAnswer = async () => {
        try {
            const apiUrl = `http://52.78.248.199:8080/answers/${answerId}`;

            const postData = {
                userId: LuserId,
                title: "1",
                content: answerText,
            };

            const headers = {
                accessToken: accesstoken
            }
            console.log(accesstoken)
            console.log(headers)
            const response = await axios.patch(apiUrl, postData, { headers });

            console.log('POST 요청 성공:', response.data);
        } catch (error) {
            console.error('POST 요청 실패:', error);
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
                            <div>{(userId == LuserId) ?
                                <ul onClick={() => { setView(!view) }} style={styles.dropdownbtn}>⋮
                                    {view && (
                                        <div style={{ background: 'white', border: '1px solid #000' }}>
                                            <li onClick={() => { setFixClick(true) }} style={{ order: '-1', height: '25px', width: "100px", }}>수정하기</li>
                                            <li style={{ order: '-1', height: '25px', width: "100px" }}>신고하기</li>
                                            <li style={{ order: '-1', height: '25px', width: "100px" }}>삭제하기</li>
                                        </div>
                                    )}
                                </ul>
                                :
                                <ul onClick={() => { setView(!view) }} style={styles.dropdownbtn}>⋮
                                    {view && (
                                        <div style={{ background: 'white', border: '1px solid #000' }}>
                                            <li style={{ order: '-1', height: '25px', width: "100px" }}>신고하기</li>
                                        </div>
                                    )}
                                </ul>}</div> : null}
                    </div>
                    <h3 style={styles.question_title}>{userNickname}</h3>
                </div>
            </div>
            {fixClick ?
                <div>
                    <div style={{ ...styles.inputBox, background: "#D9D9D9" }}>
                        <textarea
                            style={styles.inputBox2}
                            onChange={(event) => setAnswerText(event.target.value)}
                            value={answerText}
                        />
                    </div>
                    <button onClick={handleSubmit} style={styles.answer_button}>답변수정</button>
                </div> :
                <div style={{ margin: '15px', minHeight: '10vh', filter: isBlurred ? 'blur(5px)' : 'none' }}>
                    {content}
                </div>}
            {answerOfAnswer && (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '3%' }}>
                        <div style={{ marginRight: '1%' }}>💬{answerCount}</div>
                        <div onClick={handleClickLike}>👍{totalLike}</div>
                    </div>
                    {reanswerList && reanswerList.length > 0 ? (
                        <div>
                            {reanswerList.map((reanswer, index) => reanswer.content && reanswer.content.length > 0 ? (
                                <Reanswer key={index} content={reanswer.content} userId={reanswer.nickname} answerId={answerId} />
                            ) : null)}
                            <Childnewanswer qId={qId} answerId={answerId} />{/* answerGroup에 부모답변 id입력 */}
                        </div>
                    ) : (<Childnewanswer qId={qId} answerId={answerId} />)}
                </div>
            )}
        </div >
    );
}

export default Answer;
