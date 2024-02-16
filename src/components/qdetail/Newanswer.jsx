// @ts-nocheck
import React, { useEffect } from "react";
import { styles } from "./style";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { QuestionApi } from "src/api/question.controller";
import { accesstokenState, userIdState } from "../../atom/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

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

    //새로운 답변 post하는 함수 handleSubmit안에 넣자

    const postAnswer = async () => {
        const requestData = {
            id: "1",
            data: {
                userId: userId,
                title: "1",
                content: answerText,
                catagory: "PARENT",
                answerGroup: "0"
            },
            accessToken: accesstoken
        };

        console.log("보낼 데이터:", requestData); // 요청 전에 보낼 데이터를 로그로 출력

        try {
            const response = await QuestionApi.uploadAnswer(requestData);
            console.log("응답:", response); // 요청이 성공하면 서버로부터 받은 응답을 출력
        } catch (error) {
            console.error("통신에러", error); // 요청이 실패하면 에러 출력
        }
    };




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
