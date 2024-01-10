import React from "react";
import { useState } from "react";
import { styles } from "./qdetail/style";

function Question() {
    const [view, setView] = useState(false);
    const [isChild, setIsChiled] = useState(true);

    return (
        <div style={styles.question_container}>
            <div style={styles.q_box}>
                <div style={styles.question_main}>
                    <div style={styles.profile_box}><div style={styles.profile_img}></div></div>
                    <div style={styles.question_main2}>
                        <div style={styles.question_main3}>
                            <div style={styles.question_hashtag}>#해시태그</div>
                            <div style={{ flex: '1' }}>{isChild ? "어린이" : null}</div>
                            <ul onClick={() => { setView(!view) }} style={styles.dropdownbtn}>⋮
                                {view && (
                                    <>
                                        <li>수정하기</li>
                                        <li>신고하기</li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <h3 style={styles.question_title}>질문 제목</h3>
                        <div style={{ flex: '1' }}>🕓1시간 전</div>
                    </div>
                </div>
                <div style={{ flex: '3', margin: '15px' }}>질문내용</div>
            </div>
        </div>
    )
}

export default Question;