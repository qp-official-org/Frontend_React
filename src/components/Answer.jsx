import React from "react";
import { styles } from "./qdetail/style";
import { useState } from "react";

function Answer() {
    const [view, setView] = useState(false);
    return (
        <div>
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
            <div>
                답변 내용
            </div>
        </div>
    )
};

export default Answer;