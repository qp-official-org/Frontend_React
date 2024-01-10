import React from "react";
import { styles } from "./style";
import { useState } from "react";

function Newanswer() {
    const [view, setView] = useState(false);
    const [answerText, setAnswerText] = useState("");
    const onChangeText = (event) => {
        setAnswerText(event.target.value);
    }
    return (
        <div style={styles.newanswer_box}>
            <div style={styles.question_main}>
                <div style={styles.profile_box}><div style={styles.profile_img}></div></div>
                <div style={styles.question_main2}>
                    <div style={styles.question_main3}>
                        <ul onClick={() => { setView(!view) }} style={styles.dropdownbtn}>⋮
                            {view && (
                                <>
                                    <li style={{ flexDirection: 'row' }}>수정하기</li>
                                    <li>신고하기</li>
                                </>
                            )}
                        </ul>
                    </div>
                    <h3 style={styles.question_title}>답변자 정보</h3>
                </div>
            </div>
            <div style={{ justifyContent: 'center' }}>
                <input placeholder="답변을 입력해주세요." style={styles.inputBox}></input>
            </div>
        </div>
    )
}
export default Newanswer;