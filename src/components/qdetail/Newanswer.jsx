// @ts-nocheck
import React from "react";
import { styles } from "./style";
import { useState } from "react";
import Dropdown from "../Dropdown";

function Newanswer() {
    const [answerText, setAnswerText] = useState("");
    const [submitBtnClicked, setSubmitBtnClicked] = useState(false);

    const onChangeText = (event) => {
        setAnswerText(event.target.value);
    }//서버에 추가할 답변 내용
    const handleSubmit = () => {
        setSubmitBtnClicked(true)
    }

    // 나중에 서버에 올릴 값(변수 answerText)

    return (
        <div style={styles.newanswer_box}>
            <div style={styles.question_main}>
                <div style={styles.profile_box}><div style={styles.profile_img}></div></div>
                <div style={styles.question_main2}>
                    <div style={styles.question_main3}>
                        <Dropdown />
                    </div>
                    <h3 style={styles.question_title}>답변자 정보</h3>
                </div>
            </div>
            <div style={{ justifyContent: 'center' }}>
                <div style={{ ...styles.inputBox, background: "#D9D9D9" }}>
                    <textarea
                        placeholder="답변을 입력해주세요."
                        style={styles.inputBox2}
                        onChange={onChangeText}
                    />
                </div>
                <div><button onClick={handleSubmit} style={styles.answer_button}>등록하기</button></div>

            </div>
        </div>
    )
}

export default Newanswer;
