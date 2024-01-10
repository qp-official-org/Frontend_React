import React from "react";
import { styles } from "./style";
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
                                <><div style={{ background: 'white', border: '1px solid #000' }}>
                                    <li style={{ order: '-1', height: '25px', width: "100px" }}>수정하기</li>
                                    <li style={{ order: '-1', height: '25px', width: "100px" }}>신고하기</li>
                                </div>
                                </>
                            )}
                        </ul>
                    </div>
                    <h3 style={styles.question_title}>답변자 정보</h3>
                </div>
            </div>
            <div style={{ margin: '15px' }}>
                답변 내용
            </div>
        </div>
    )
};

export default Answer;