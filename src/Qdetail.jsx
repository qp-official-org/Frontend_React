// @ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/qdetail/style";
import Answer from "./components/qdetail/Answer";
import Newanswer from "./components/qdetail/Newanswer";
import Question from "./components/Question";
//import { Link } from "react-router-dom";

function Qdetail() {
    const [isLogined, setIsLogined] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [view, setView] = useState(false);
    const [alarm, setAlarm] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const [isChild, setIsChiled] = useState(true);
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const ddClick = () => {
        setView(!view)
    };
    const answerClick = () => {
        console.log("clicked")
        setBtnClicked(true)
    };
    const openReAnswer = () => {
        setAnswerOfAnswer(!answerOfAnswer)
        console.log('clicked')
    }
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
                    <div style={styles.b_q_container}>◀ 이전 질문으로 이동 칸</div>
                    {/*Link 컴포넌트로 바꿀 태그*/}
                    <div style={styles.a_q_container}>다음 질문으로 이동 칸 ▶</div>
                    {/*Link 컴포넌트로 바꿀 태그*/}
                </div>
                <div style={btnClicked ? styles.q_a_main2 : styles.q_a_main1}>
                    <div style={{ flex: '1' }}>
                        <Question />
                    </div>
                    <hr style={styles.hrline} />
                    <div style={btnClicked ? { flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' } : null}>
                        {btnClicked ? <Newanswer /> :
                            <button onClick={answerClick} style={styles.a_button}>답변하기</button>}
                    </div>

                    {/* map함수로 답변 컴포넌트 호출 */}

                    <div onClick={openReAnswer} style={styles.answer}>
                        {/*answerOfAnswer ? <Reanswer /> : null*/}
                        <Answer />
                    </div>
                    <div onClick={openReAnswer} style={styles.answer}>
                        <Answer />
                    </div>
                    <div onClick={openReAnswer} style={styles.answer}>
                        <Answer />
                    </div>
                </div>
            </div>
            <div style={styles.profilecontainer}>
                {isLogined ? null/* 로그인 한 사람의 프로필이 담긴 컴포넌트 */ : <div style={styles.profilecontainer2}>로그인</div>}

            </div>
        </div >
    );
}
export default Qdetail;
