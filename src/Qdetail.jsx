// @ts-nocheck
import React, { useEffect } from "react";
import { useState } from "react";
import { styles } from "src/components/qdetail/style";
import Answer from "./components/qdetail/Answer";
import Newanswer from "./components/qdetail/Newanswer";
import Question from "./components/Question";
import Header from "./Header";
import { QuestionApi } from "src/api/question.controller";
import { accesstokenState, userIdState } from "./atom/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link, useParams } from 'react-router-dom';

//questionId를 받고 호출받음
function Qdetail() {
    const params = useParams();
    const qId = parseInt(params.questionId)
    const [isLogined, setIsLogined] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [view, setView] = useState(false);
    const [alarm, setAlarm] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const [isChild, setIsChiled] = useState(true);
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const [title, setTitle] = useState("질문 제목2");
    const [content, setContent] = useState('질문내용');
    const [hashtags, setHashtags] = useState("");
    const [answerId, setAnswerId] = useState("");
    const [howLong, setHowlong] = useState("1시간 전");
    const userId = useRecoilValue(userIdState)
    const accesstoken = useRecoilValue(accesstokenState)
    const getTimeAgo = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();

        const elapsed = now - date;

        const seconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) {
            return `${years}년 전`;
        } else if (months > 0) {
            return `${months}달 전`;
        } else if (days > 0) {
            return `${days}일 전`;
        } else if (hours > 0) {
            return `${hours}시간 전`;
        } else if (minutes > 0) {
            return `${minutes}분 전`;
        } else {
            return `${seconds}초 전`;
        }
    }

    const receiveQuestion = async () => {
        try {
            const response = await QuestionApi.findOne(qId);
            console.log(response)
            setTitle(response.result.title)
            setContent(response.result.content)
            setHashtags(response.result.hashtags)
            const howLong = getTimeAgo(response.result.createdAt);
            setHowlong(howLong)
            console.log(howLong);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        receiveQuestion()
        receiveAnswer()
    }, [])

    //질문 ID로 답변 ID받아오기

    const receiveAnswer = async () => {
        try {
            console.log('질문받기전', qId)
            const response = await QuestionApi.findParentAnswer(qId, 0, 10);
            console.log(response)
            setAnswerId(response.result.parentAnswerList.answerId)
            setAnswerList(response.result.parentAnswerList)
        } catch (error) {
            console.error("답변", error)
        }
    };

    //부모 답변들의 id가 담겨있는 list

    const [answerList, setAnswerList] = useState([]);
    const ddClick = () => {
        setView(!view)
    };
    const answerClick = () => {
        console.log("clicked")
        setBtnClicked(true)
        console.log(accesstoken, userId)
    };

    return (
        <div>
            <Header />
            <div style={styles.full_container}>
                <div style={styles.search_ad_container}>
                </div>
                <div style={styles.question_detail_main_container}>
                    <div style={styles.after_before_question_container}>
                        <div style={styles.before_question_container}>◀ 이전 질문으로 이동 칸</div>
                        {/*Link 컴포넌트로 바꿀 태그*/}
                        <div style={styles.after_question_container}>다음 질문으로 이동 칸 ▶</div>
                        {/*Link 컴포넌트로 바꿀 태그*/}
                    </div>
                    <div style={styles.main_orange_container}>
                        <div style={{ flex: '1' }}>
                            <Question time={howLong} hashtags={hashtags} title={title} content={content} />
                        </div>
                        <div style={{ textAlign: 'center', color: 'white', fontWeight: '600', fontSize: '16px' }}>{answerList.length}명의 전문가가 답변했어요</div>
                        <hr style={styles.hrline} />
                        <div style={btnClicked ? { flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' } : { display: 'flex', height: '100%' }}>
                            {btnClicked ? <Newanswer qId={qId} /> :
                                <button onClick={answerClick} style={styles.answer_button}>답변하기</button>}
                        </div>
                        {answerList.map((answer, index) => (
                            <div style={styles.answer}>
                                <Answer key={index} like={answer.likeCount} answerId={answer.answerId} content={answer.content} userId={answer.nickname} />
                            </div>
                        ))}
                        { }
                    </div>
                </div>
                <div style={styles.profilecontainer}>
                    { }

                </div>
            </div >
        </div>
    );
}
export default Qdetail;