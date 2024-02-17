// @ts-nocheck
import React from "react";
import { useState, useEffect } from "react";
import { styles } from "./qdetail/style";
import Dropdown from "./Dropdown";

function Question({ title, content, hashtags }) {
    const [isChild, setIsChiled] = useState(true);

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
                            <Dropdown />
                        </div>
                        <h3 style={styles.question_title}>{title}</h3>
                        <div style={{ flex: '1' }}>🕓1시간 전</div>
                    </div>
                </div>
                <div style={{ flex: '3', margin: '15px' }}>{content}</div>
            </div>
        </div>
    )
}

export default Question;
