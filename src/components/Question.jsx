// @ts-nocheck
import React from "react";
import { useState, useEffect } from "react";
import { styles } from "./qdetail/style";
import Dropdown from "./Dropdown";
import { accesstokenState, userIdState } from "src/atom/atoms";
import { useRecoilValue } from "recoil";
import axios from "axios";

function Question({ time, title, content, hashtags, qId }) {
    const [view, setView] = useState(false);
    const [isChild, setIsChiled] = useState(true);
    const [fixClick, setFixClick] = useState(false)
    const [questionTitle, setQuestionTitle] = useState(title);
    const [questionContent, setQuestionContent] = useState(content);
    const LuserId = useRecoilValue(userIdState)
    const accesstoken = useRecoilValue(accesstokenState)
    const handleSubmit = () => {
        fixQuestion()
        window.location.reload()
    }
    const fixQuestion = async () => {
        try {
            const apiUrl = `http://52.78.248.199:8080/questions/${qId}`;

            const postData = {
                userId: LuserId,
                title: questionTitle,
                content: questionContent,
            };
            const headers = {
                accessToken: accesstoken
            }
            const response = await axios.patch(apiUrl, postData, { headers });

            console.log('질문수정 요청 성공:', response.data);
        } catch (error) {
            console.error('질문수정 요청 실패:', error);
        }
    }
    return (
        <div style={styles.question_container}>
            <div style={styles.q_box}>
                <div style={styles.question_main}>
                    <div style={styles.profile_box}><div style={styles.profile_img}></div></div>
                    <div style={styles.question_main2}>
                        <div style={styles.question_main3}>
                            {hashtags.length > 0 && (
                                <div style={styles.question_hashtag}>
                                    {hashtags.map((tag, index) => <div style={{ marginRight: '2%' }} key={index}>#{tag.hashtag}</div>)}
                                </div>
                            )}
                            <div style={{ flex: '1' }}>{isChild ? "어린이" : null}</div>
                            <ul onClick={() => { setView(!view) }} style={styles.dropdownbtn}>⋮
                                {view && (
                                    <div style={{ background: 'white', border: '1px solid #000' }}>
                                        <li onClick={() => { setFixClick(true) }} style={{ order: '-1', height: '25px', width: "100px" }}>수정하기</li>
                                        <li style={{ order: '-1', height: '25px', width: "100px" }}>신고하기</li>
                                    </div>
                                )}
                            </ul>
                        </div>
                        {fixClick ? (
                            <div>
                                <input
                                    style={{ flex: '2', width: '75%', display: 'flex', marginTop: '0%' }}
                                    onChange={(event) => setQuestionTitle(event.target.value)}
                                    value={questionTitle}
                                />
                            </div>
                        ) : (
                            <h3 style={styles.question_title}>{title}</h3>
                        )}
                        <div style={{ flex: '1' }}>🕓{time}</div>
                    </div>
                </div>
                {fixClick ? <div>
                    <div style={{ ...styles.inputBox, background: "#D9D9D9" }}>
                        <textarea
                            style={styles.inputBox2}
                            onChange={(event) => setQuestionContent(event.target.value)}
                            value={questionContent}
                        />
                    </div>
                    <button onClick={handleSubmit} style={styles.answer_button}>질문수정</button>
                </div>
                    : <div style={{ flex: '3', margin: '15px' }}>{content}</div>}
            </div>
        </div>
    )
}

export default Question;
