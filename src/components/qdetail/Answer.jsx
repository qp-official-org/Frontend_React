// @ts-nocheck
import React from "react";
import { styles } from "./style";
import { useState } from "react";
import Newanswer from "./Newanswer";
import Dropdown from "../Dropdown";
import Reanswer from "../Reanswer";
import { QuestionApi } from "src/api/question.controller";

function Answer({ content, userId, answerId }) {//props로 답변 내용을 전달받음(값 그대로 와서 가공할 필요X)
    const [view, setView] = useState(false);
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isBlurred, setIsBlurred] = useState(true);
    const [reanswerList, setReanswerList] = useState(answerId);

    const handleCheckBtn = () => {
        setIsBtnClicked(true);
        setAnswerOfAnswer(true);
        setIsBlurred(false);
    };

    const reanswerRequest = async () => {
        try {
            const response = await QuestionApi.findChildAnswer({ answerId }, 10, 0);
            console.log(response)
            setReanswerList(response.result.answerList)
        } catch (error) {
            console.error(error)
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
                        <Dropdown />
                    </div>
                    <h3 style={styles.question_title}>{userId}</h3>
                </div>
            </div>
            <div style={{ margin: '15px', minHeight: '10vh', filter: isBlurred ? 'blur(5px)' : 'none' }}>
                {content}
            </div>

            {answerOfAnswer && (
                <div>
                    {answerOfAnswer && (
                        <div>
                            {reanswerList.map((reanswer, index) => reanswer.content && reanswer.content.length > 0 ? (
                                <Reanswer key={index} content={reanswer.content} userId={reanswer.userId} answerId={answerId} />
                            ) : null)}
                            <Newanswer answerId={answerId} />{/* answerGroup에 부모답변 id입력 */}
                        </div>
                    )}
                </div>
            )}
        </div >
    );
}

export default Answer;
