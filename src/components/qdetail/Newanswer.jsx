// @ts-nocheck
import React from "react";
import { styles } from "./style";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { QuestionApi } from "src/api/question.controller";

function Newanswer(qId) {
    const [answerText, setAnswerText] = useState("");
    const [submitBtnClicked, setSubmitBtnClicked] = useState(false);

    const onChangeText = (event) => {
        setAnswerText(event.target.value);
    }//서버에 추가할 답변 내용
    const handleSubmit = () => {
        setSubmitBtnClicked(true)
    }

    //새로운 답변 post하는 함수 handleSubmit안에 넣자
    /*
    const postAnswer = async () => {
        try {
            const response = await QuestionApi.uploadAnswer({
                data: {
                    userId: "2",
                    title: "1",
                    content: answerText,
                    catagory,
                    answerGroup
                },
                id: qId
            })
        } catch (error) {
            console.error(error)
        }
    }
*/
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
