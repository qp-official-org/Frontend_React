// @ts-nocheck
import React from "react";
import Header from "./Header";
import { styles } from "./components/registerq/style";
import { useState, useEffect } from "react";
import { Api } from "./api/common.controller";
import { QuestionApi } from "./api/question.controller";
import { RegisterApi } from "./api/register.controller";
//header에서 userId받아오기
function Qregister() {
    const [childClicked, setChildClicked] = useState(true)
    const [adultClicked, setAdultClicked] = useState(false)
    const [warnCheck, setWarnCheck] = useState(true);
    const [hashtag, setHashtag] = useState([])
    const [writeTag, setWriteTag] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const [titleValidateMin, setTitleValidateMin] = useState(false);
    const [titleValidateMax, setTitleValidateMax] = useState(false);
    const [titleValidate, setTitleValidate] = useState(false);
    const [contentValidateMin, setContentValidateMin] = useState(false);
    const [contentValidateMax, setContentValidateMax] = useState(false);
    const [hashTagModal, setHashTagModal] = useState(false);
    const [userId, setUserId] = useState(2);
    const [hashtagId, setHashtagId] = useState([]);

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value)
        validateTitle()
    };
    const handleContentChange = (e) => {
        const value = e.target.value;
        setContent(value)
        validateContent()
    };
    //childClicked, adultClicked 보내기
    const handleChildClicked = () => {
        setChildClicked(!childClicked)
        setAdultClicked(!adultClicked)
    };
    //유의사항 체크
    const handleBtnClicked = () => {
        setWarnCheck(!warnCheck)
    };
    //올릴 값 반영
    const handleWriteTagChange = (e) => {
        const value = e.target.value;
        setWriteTag(value);
    };
    //Enter키 눌렀을 때 hashtag리스트에 반영
    const handleTagKeyDown = (e) => {
        if (e.key === "Enter") {
            setWriteTag("")
            if (hashtag.length === 3) {
                alert('다시 입력하려면 기존 해시태그를 지워주세요')
                setWriteTag("")
            } else {
                setHashTagModal(false)
                setHashtag([...hashtag, writeTag])
            }
        }
    }
    //해시태그 리스트에서 항목 삭제
    const handleTagRemove = (index) => {
        const newTagList = [...hashtag];
        newTagList.splice(index, 1);
        setHashtag(newTagList);
    };
    //제목 유효성 검사
    const validateTitle = () => {
        const minLength = 5;
        const maxLength = 60;
        if (title.length < minLength) {
            setTitleValidateMin(false)
        } else {
            setTitleValidateMin(true)
        };

        if (title.length > maxLength) {
            setTitleValidateMax(false)
        } else {
            setTitleValidateMax(true)
        };

        if (!title.endsWith("?")) {
            setTitleValidate(false)
        } else {
            setTitleValidate(true)
        }
    };
    //내용 유효성 검사
    const validateContent = () => {
        const minLength = 10;
        const maxLength = 300;
        if (content.length < minLength) {
            setContentValidateMin(false)
        } else {
            setContentValidateMin(true)
        };

        if (content.length > maxLength) {
            setContentValidateMax(false)
        } else {
            setContentValidateMax(true)
        }
    };
    //해시태그 항목들 ID로 변환
    /*해시태그 ID로 변환 고치기 전
    const hashtagToId = async (hashtag) => {
        try {
            const response = await Promise.all(hashtag.map(async (singletag) => {
                console.log({ "hashtag": singletag })
                const response = await RegisterApi.findHashtag({
                    data: {
                        hashtag: singletag
                    }
                });
                console.log(response)
            }))
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        hashtagToId(hashtag)
    }, [hashtag])
    */
    //서버에 POST하는 함수

    /*해시태그 에러 고치기 전
    const handleRegistration = async () => {
        try {
            // hashtag 배열의 각 요소에 대해 병렬로 처리하기 위해 Promise.all을 사용
            await Promise.all(hashtag.map((singleHashtag, index) => {
                return RegisterApi.findHashtag(singleHashtag)
                    .console.log('1')
                    .catch(error => console.error(error.message));
            }));
            // 질문을 업로드
            const response = await QuestionApi.uploadQuestion({
                data: {
                    userId,
                    title,
                    content,
                    hashtag: [1, 2, 3],
                },
            });

            console.log('등록 성공:', response);
        } catch (error) {
            console.error('등록 오류:', error);
        }
        console.log(hashtag)
    };
    */



    const handleRegistration = async () => {
        let data = {
            userId,
            title,
            content,
            hashtag
        }
        console.log(data)
        try {
            const response = await QuestionApi.uploadQuestion(
                {
                    data: {
                        userId,
                        title,
                        content,
                        hashtag
                    },
                }
            );
            console.log('Registration successful:', data, response);
        }
        catch (error) {
            console.error('Registration error:', error);
        }
    };

    useEffect(() => {
        validateTitle();
    }, [title]);

    useEffect(() => {
        validateContent();
    }, [content]);
    return (<div>
        <Header />
        <div style={{ justifyContent: 'center', display: 'flex', }}>
            <div style={{}}>
                <div>
                    <div style={styles.title}>
                        제목
                    </div>
                    <textarea style={styles.title_box} value={title} onChange={(e) => handleTitleChange(e)}></textarea>
                    <div style={styles.title_detail}>
                        <div></div>
                        <div style={styles.title_detail_text}>
                            <div style={titleValidateMin ? { color: 'green' } : { color: 'red' }}>최소 5자</div>
                            <div style={titleValidateMax ? { color: 'green' } : { color: 'red' }}>최대 60자</div>
                            <div style={titleValidate ? { color: 'green' } : { color: 'red' }}>?(물음표)로 끝내기</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={styles.title}>본문</div>
                    <textarea value={content} onChange={(e) => handleContentChange(e)} style={styles.main_content_box}></textarea>
                    <div style={styles.title_detail}>
                        <div></div>
                        <div style={styles.title_detail_text}>
                            <div style={contentValidateMin ? { color: 'green' } : { color: 'red' }}>최소 10자</div>
                            <div style={contentValidateMax ? { color: 'green' } : { color: 'red' }}>최대 300자</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={styles.title}>해시태그(최대3개)</div>
                    <input style={styles.tag_input} value={writeTag} onChange={handleWriteTagChange} onKeyDown={handleTagKeyDown} />
                    <div style={{ marginTop: '2.5%', display: 'flex' }}>
                        {hashtag.map((tag, index) => (
                            <div style={{ minWidth: '5%', marginRight: '1%' }}>
                                <div style={{ ...styles.hashtag_block, width: `${tag.length + 1.5}vw` }}>
                                    <div style={{ marginRight: '1.5%' }}>{tag}</div>
                                    <div style={{ color: '#EB7125' }} onClick={() => handleTagRemove(index)}>X</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={styles.child_or_adult}>
                    <div style={styles.title}>난이도</div>
                    <div style={{ marginTop: '2%' }}>
                        <div style={styles.child_or_adult_text}>
                            <button onClick={handleChildClicked} style={childClicked ? styles.clicked_button : styles.not_clicked_button}>어린이</button>

                            <button onClick={handleChildClicked} style={adultClicked ? styles.clicked_button : styles.not_clicked_button}>성인</button>
                        </div>
                        <div style={styles.child_guide1}></div>
                        <div style={styles.child_guide2}>
                            <div style={styles.child_explain_block}>
                                '어린이'를 활성시키면<br />
                                어린이 수준에 맞는 답변을 해줍니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ ...styles.title, marginTop: '6%' }}>질문 등록 시 유의사항(필수)</div>
                    <div style={styles.warn_block}>
                        <div style={styles.warn_text}>
                            <div>작성자님께서 궁금해하고 등록한 질문은 다른 사람들도 궁금해할 만한 질문들입니다.</div>

                            <div>질문에 대한 답변을 구매하는 형식이기에 한 사람이라도 답변을 구매한다면 질문을 수정하거나 삭제할 수 없습니다.</div>

                            <div>이와 같은 이유로 작성하실 때 신중히 작성해주세요.</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        {warnCheck ? <button onClick={handleBtnClicked} style={styles.before_warn_btn_check}></button>
                            :
                            <button onClick={handleBtnClicked} style={styles.after_warn_btn_check}>✔</button>}
                        <div>유의사항을 모두 읽고 동의합니다.</div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={handleRegistration}
                        disabled={warnCheck || !titleValidate || !titleValidateMax || !titleValidateMin || !contentValidateMax || !contentValidateMin}
                        style={styles.submit_btn}
                    >
                        등록
                    </button>
                </div>
            </div>
        </div>
    </div >)
}

export default Qregister;