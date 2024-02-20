//@ts-nocheck
import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useSearchContent } from './Context';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from './atom/atoms';
import { useNavigate } from "react-router-dom";

const SearchPage = ({ }) => {
  const [questiontitle, setquestitle] = useState(null);
  const [profileImage, setphoto] = useState(null);
  const [quesHashs, setquesHash] = useState(null);
  const navigate = useNavigate();
  const [qcount, setqcount] = useState('');
  const { AsearchContent, setASearchContent } = useSearchContent();
  const [questionId, setquesId] = useState(null);
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null); // 클릭한 박스의 인덱스를 저장할 상태 변수
  const ls = useRecoilValue(loginState)
  const page = 1;
  const size = 10;

  // 클릭 이벤트 핸들러
  const handleBoxClick = (index) => {
    setSelectedBoxIndex(index);
  };
  const GoRegister = () => {
    { ls ? navigate("/register") : alert("로그인이 필요합니다.") }
  };
  console.log(AsearchContent);
  useEffect(() => {
    if (!AsearchContent || !AsearchContent.trim()) return;
    fetch(
      `http://52.78.248.199:8080/questions?page=${page}&size=${size}&search=${AsearchContent}`,
      {
        // cache: 'no-store',
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((qdata) => {
        const counts = qdata.result.questions.length;
        setqcount(counts);
        console.log(counts);
        const titles = qdata.result.questions.map((question) => question.title);
        setquestitle(titles);
        const quesId = qdata.result.questions.map(
          (question) => question.questionId
        );
        setquesId(quesId);
        console.log('qid', quesId);
        const profileImage =
          Array.isArray(qdata.result.questions) &&
            qdata.result.questions.length > 0
            ? qdata.result.questions[0].user.profileImage
            : null;
        setphoto(profileImage);
        const quesHash = qdata.result.questions.map(
          (question) => question.hashtags
        );
        setquesHash(quesHash);
        console.log(qdata);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [AsearchContent]);

  return (
    <>
      <Header />
      <p style={{ textAlign: 'center', marginTop: '5vh' }}>
        총 {qcount}개의 질문이 있습니다
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {questiontitle &&
          questiontitle.map((title, index) => (
            <div className="questionwrap" key={index}>
              <Link
                to={`/detail/${questionId[index]}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <div
                  className="searchItem"
                  onClick={() => handleBoxClick(index)}
                >
                  <div className="boxq">
                    <div className="otherprofile">
                      <img
                        style={{ width: '70px' }}
                        src={profileImage}
                        alt="프사"
                      />
                    </div>
                    <p className="temp">{title}</p>
                    {/* 질문과 관련된 해시태그 출력 */}
                    {Array.isArray(quesHashs) && quesHashs.length > 0 && (
                      <div className="qhashtags">
                        {quesHashs[index].map((hashTag, idx) => (
                          <p key={idx}>#{hashTag.hashtag}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div
        className="addquestionwrap"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          flexWrap: 'wrap',
          marginTop: '5vh',
        }}
      >
        <p style={{ color: '#eb7125' }}>원하는 질문이 없으세요?</p>
        <button
          className="moreq"
          style={{
            width: '159px',
            height: '58px',
            borderRadius: '40px',
            color: 'white',
            backgroundColor: '#eb7125',
            border: 'none',
          }}
        >
          <div onClick={GoRegister} style={{ textDecoration: 'none', color: 'inherit' }}>질문하러 가기</div>
        </button>
      </div>
    </>
  );
};

export default SearchPage;
