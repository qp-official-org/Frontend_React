// @ts-nocheck

import React from "react";
import { useState } from "react";
import Newanswer from "./qdetail/Newanswer";
import { styles } from "./qdetail/style";
import Dropdown from "./Dropdown";

function Reanswer({ content, userId }) {
    const [isBlurred, setIsBlurred] = useState(false);


    return (
        <div style={styles.newanswer_box}>
            <div style={styles.question_main}>
                <div style={styles.profile_box}><div style={styles.profile_img}></div></div>
                <div style={styles.question_main2}>
                    <div style={styles.question_main3}>
                        <Dropdown />
                    </div>
                    <h3 style={styles.question_title}>{userId}</h3>
                </div>
            </div>
            <div style={{ margin: '15px', minHeight: '10vh', filter: isBlurred ? 'blur(5px)' : 'none' }}>
                {content}
            </div>
        </div>
    )
}

export default Reanswer;