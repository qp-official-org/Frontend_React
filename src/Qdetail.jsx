// @ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/qdetail/style";
//import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

function Qdetail() {
    const [isLogined, setIsLogined] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [view, setView] = useState(false);
    const [alarm, setAlarm] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const ddClick = () => {
        setView(!view)
    };
    const answerClick = () => {
        console.log("clicked")
        setBtnClicked(true)
    };
    return (
        <div style={styles.container}>
            <div style={styles.q_a_sub}>
                <button style={styles.q_container}>
                    <div>돋보기 사진이 들어갈 자리</div>
                    <div>궁금한 것을 질문해보세요</div>
                </button>
                <button style={styles.ad}>광고/배너</button>
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
                    <hr style={{ width: '90%', height: '2px', background: 'white' }} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {btnClicked ? null/*답변 입력할 수 있는 컴포넌트*/ : <button onClick={answerClick} style={styles.a_button}>
                            답변하기
                        </button>}
                    </div>
                    {/* map함수로 답변 컴포넌트 호출 */}

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
