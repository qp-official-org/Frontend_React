// @ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/qdetail/style";
import Answer from "./components/qdetail/Answer";
import Newanswer from "./components/qdetail/Newanswer";
import Question from "./components/Question";
import Header from "./Header";
import { QuestionApi } from "src/api/question.controller";

//import { Link } from "react-router-dom";
//questionId를 받고 호출받음
function Qdetail({ qId }) {
    const [isLogined, setIsLogined] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [view, setView] = useState(false);
    const [alarm, setAlarm] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const [isChild, setIsChiled] = useState(true);
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const [title, setTitle] = useState("질문 제목");
    const [content, setContent] = useState('질문내용');
    const [hashtag, setHashtag] = useState("");
    const [answerId, setAnswerId] = useState("")
    const receiveQuestion = async () => {
        try {
            const response = await QuestionApi.findOne({ qId });
            console.log(response)
            setTitle(response.result.title)
            setContent(response.result.content)
            setHashtag(response.result.hashtags)
        } catch (error) {
            console.error(error)
        }
    };
    receiveQuestion();

    const receiveAnswer = async () => {
        try {
            const response = await QuestionApi.findParentAnswer({ qId }, 10, 0);
            console.log(response)
            setAnswerId(response.result.parentAnswerList.answerId)
            setAnswerList(response.result.parentAnswerList)
        } catch (error) {
            console.error(error)
        }
    };
    receiveAnswer();


    const [answerList, setAnswerList] = useState([
        {
            content: "이것은 첫 번째 답변입니다.",
            author: "User1",
            reply: [{
                content: '이것은 첫 번째 답변의 리플1입니다.',
                author: "User4"
            },
            {
                content: '이것은 첫 번째 답변의 리플2입니다.',
                author: 'User7'
            }],
        },
        {
            content: "두 번째 답변입니다.",
            author: "User2",
            reply: [{
            }]
        },
        {
            content: "세 번째 답변입니다.",
            author: "User3",
            reply: [{
                content: '이것은 세 번째 답변의 리플1입니다.',
                author: "User6",
            }]
        },
    ]);/*서버에서 받는 답변 리스트
    Answer안에 있는 Reanswer에 대한 내용도 Qdetail에서 받아야할지,
    Answer컴포넌트에서 불러와야할지...*/

    //등록하기 누름 => textarea에 있는 내용이 컴포넌트를 불러오는 컴포넌트로 전달 => map으로 돌려서 생성
    const ddClick = () => {
        setView(!view)
    };
    const answerClick = () => {
        console.log("clicked")
        setBtnClicked(true)
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
                            <Question title={title} content={content} />
                        </div>
                        <div style={{ textAlign: 'center', color: 'white', fontWeight: '600', fontSize: '16px' }}>{answerList.length}명의 전문가가 답변했어요</div>
                        <hr style={styles.hrline} />
                        <div style={btnClicked ? { flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' } : { display: 'flex', height: '100%' }}>
                            {btnClicked ? <Newanswer /> :
                                <button onClick={answerClick} style={styles.answer_button}>답변하기</button>}
                        </div>
                        {answerList.map((answer, index) => (
                            <div style={styles.answer}>
                                <Answer key={index} reply={answer.reply} content={answer.content} author={answer.author} />
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