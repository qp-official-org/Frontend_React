// @ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/qdetail/style";
import Answer from "./components/qdetail/Answer";
import Newanswer from "./components/qdetail/Newanswer";
import Question from "./components/Question";
//import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

function Qdetail() {
    const [isLogined, setIsLogined] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [view, setView] = useState(false);
    const [alarm, setAlarm] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const [isChild, setIsChiled] = useState(true);
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const [answerList, setAnswerList] = useState([1, 2, 3]);//서버에서 받는 답변 리스트
    /*
        useEffect(()=>{
            const fetchAnswers = async () =>{
                const answers = await {주소();}
                swetAnswerList(answers);
            };
        })
    */
    const ddClick = () => {
        setView(!view)
    };
    const answerClick = () => {
        console.log("clicked")
        setBtnClicked(true)
    };

    return (
        <div style={styles.full_container}>
            <div style={styles.search_ad_container}>
                <button style={styles.search_container}>
                    <div>돋보기 사진이 들어갈 자리</div>
                    <div>궁금한 것을 질문해보세요</div>
                </button>
                <button style={styles.ad_container}>광고/배너</button>
            </div>
            <div style={styles.question_detail_main_container}>
                <div style={styles.after_before_question_container}>
                    <div style={styles.before_question_container}>◀ 이전 질문으로 이동 칸</div>
                    {/*Link 컴포넌트로 바꿀 태그*/}
                    <div style={styles.after_question_container}>다음 질문으로 이동 칸 ▶</div>
                    {/*Link 컴포넌트로 바꿀 태그*/}
                </div>
<<<<<<< HEAD
                <div style={styles.main_orange_container}>
                    <div style={{ flex: '1' }}>
                        <Question />
=======
                <div style={styles.q_a_main}>
                    <div style={{ display: 'flex', flex: '1' }}>
                        <div style={styles.q_content}>
                            <div style={{ background: 'blue', flex: '1', display: 'flex' }}>
                                <div style={{ flex: "1", background: 'red', borderRadius: "50%", width: "7vh", height: "7vh" }}>질문자 프로필</div>
                                <div style={{ flex: '10' }}>제목/해시태그/시간/어린이/더보기</div>
                            </div>
                            <div style={{ background: 'skyblue', flex: '1' }}>질문내용</div>
                        </div>
>>>>>>> b2bf9c2d2c73b3f5c7fa95141b3cce80753726ba
                    </div>
                    <hr style={styles.hrline} />
                    <div style={btnClicked ? { flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' } : { display: 'flex', height: '100%' }}>
                        {btnClicked ? <Newanswer /> :
                            <button onClick={answerClick} style={styles.answer_button}>답변하기</button>}
                    </div>
                    {answerList.map((answer, index) => (
                        <div style={styles.answer}>
                            <Answer key={index} content={answer.content} author={answer.author} />
                        </div>
                    ))}
                </div>
            </div>
            <div style={styles.profilecontainer}>
                {isLogined ? null/* 로그인 한 사람의 프로필이 담긴 컴포넌트 */ : <div style={styles.profilecontainer2}>로그인</div>}

            </div>
        </div >
    );
}
export default Qdetail;
