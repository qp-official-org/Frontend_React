// @ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/qdetail/style";

function Qdetail() {
    const [login, setLogin] = useState(false);

    return (
        <div style={styles.container}>
            <div style={styles.q_a_sub}>
                <div style={styles.q_container}>
                    <div>돋보기 사진이 들어갈 자리</div>
                    <div>궁금한 것을 질문해보세요</div>
                </div>
                <h2 style={styles.ad}>광고/배너</h2>
            </div>
            <div style={styles.ad_q}>
                <div style={styles.a_b_q_container}>
                    <div style={styles.b_q_container}>이전 질문으로 이동 칸</div>
                    {/*Link 컴포넌트로 바꿀 태그*/}
                    <div style={styles.a_q_container}>다음 질문으로 이동 칸</div>
                    {/*Link 컴포넌트로 바꿀 태그*/}
                </div>
                <div style={styles.q_a_main}>
                    <div style={{ display: 'flex', flex: '1' }}>
                        <div style={styles.q_content}>질문</div>
                    </div>
                    <hr style={{ width: '90%' }} />
                    <button>
                        답변하기
                    </button>
                    <div style={styles.answer}>답변1</div>
                    <div style={styles.answer}>답변2</div>
                    <div style={styles.answer}>답변3</div>
                </div>
            </div>
            <div style={styles.profilecontainer}>
                <div style={styles.profilecontainer2}>로그인</div>
            </div>
        </div >
    );
}
export default Qdetail;
