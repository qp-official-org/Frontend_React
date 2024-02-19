// @ts-nocheck
import React, { useEffect } from "react";
import { styles } from "./style";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { QuestionApi } from "src/api/question.controller";
import { accesstokenState, userIdState } from "../../atom/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";

function Newanswer(qId, answerId) {
    const userId = useRecoilValue(userIdState)
    const accesstoken = useRecoilValue(accesstokenState)
    const [answerText, setAnswerText] = useState("");
    const [submitBtnClicked, setSubmitBtnClicked] = useState(false);

    const onChangeText = (event) => {
        setAnswerText(event.target.value);
    }//서버에 추가할 답변 내용
    const handleSubmit = () => {
        setSubmitBtnClicked(true)
        postAnswer()
    }

    //id에는 question id
    const postAnswer = async () => {
        try {
            const id = 1;
            const apiUrl = `http://52.78.248.199:8080/answers/questions/${id}`;

            const postData = {
                userId: userId,
                title: "1",
                content: answerText,
                category: "PARENT",
                answerGroup: ""
            };

            const headers = {
                accessToken: accesstoken
            }
            console.log(accesstoken)
            console.log(headers)
            const response = await axios.post(apiUrl, postData, { headers });

            console.log('POST 요청 성공:', response.data);
        } catch (error) {
            console.error('POST 요청 실패:', error);
        }
    };





    return (
        <div style={styles.newanswer_box}>
            <div style={styles.question_main}>
                <div style={styles.profile_box}><div style={styles.profile_img}></div></div>
                <div style={styles.question_main2}>
                    <div style={styles.question_main3}>
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
