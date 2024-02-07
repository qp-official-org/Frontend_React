// @ts-nocheck
import React from "react";
import { styles } from "./style";
import { useState } from "react";
import Newanswer from "./Newanswer";
import Dropdown from "../Dropdown";
import Reanswer from "../Reanswer";
import { QuestionApi } from "src/api/question.controller";

function Answer({ content, author, reply }) {//props로 답변 내용을 전달받음
    const [view, setView] = useState(false);
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isBlurred, setIsBlurred] = useState(true);
    const [reanswerList, setReanswerList] = useState(reply);

    const handleCheckBtn = () => {
        setIsBtnClicked(true);
        setAnswerOfAnswer(true);
        setIsBlurred(false);
    };

    const answerRequest = async () => {
        try {
            const response = await QuestionApi.findParentAnswer({/*id, page, size*/ });
            console.log(response)
        } catch (error) {
            console.log(error)
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
                    <h3 style={styles.question_title}>{author}</h3>
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
                                <Reanswer key={index} reply={reanswerList} content={reanswer.content} author={reanswer.author} />
                            ) : null)}
                            <Newanswer />
                        </div>
                    )}
                </div>
            )}
        </div >
    );
}

export default Answer;
