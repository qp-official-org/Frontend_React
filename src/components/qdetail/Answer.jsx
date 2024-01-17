// @ts-nocheck
import React from "react";
import { styles } from "./style";
import { useState } from "react";
import Reanswer from "../Reanswer";
import Dropdown from "../Dropdown";

function Answer({ text }) {
    const [view, setView] = useState(false);
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isBlurred, setIsBlurred] = useState(true);

    const handleCheckBtn = () => {
        setIsBtnClicked(true);
        setAnswerOfAnswer(true);
        setIsBlurred(false);
        console.log('blur')
    };

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
                    <h3 style={styles.question_title}>답변자 정보</h3>
                </div>
            </div>
            <div style={{ margin: '15px', minHeight: '10vh', filter: isBlurred ? 'blur(5px)' : 'none' }}>
                답변내용
            </div>

            {answerOfAnswer ? <Reanswer /> : null}
        </div>
    );
}

export default Answer;
