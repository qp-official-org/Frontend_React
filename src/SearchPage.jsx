import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useSearchContent } from './Context';
import { Link } from 'react-router-dom';

const SearchPage = ({}) => {
  const [questiontitle, setquestitle] = useState(null);
  const [profileImage, setphoto] = useState(null);
  const [quesHashs, setquesHash] = useState(null);
  const [qcount, setqcount] = useState('');
  const { AsearchContent, setASearchContent } = useSearchContent();
  const page = 1;
  const size = 10;

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
      <div
        className="questionwrap"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {questiontitle &&
          questiontitle.map((title, index) => (
            <div key={index} className="searchItem">
              <div
                className="boxq"
                style={{
                  width: '18vw',
                  height: '36vh',
                  borderRadius: '15px',
                  border: '1px solid gray',
                  marginTop: '5vh',
                  marginLeft: '3vw',
                }}
              >
                <div className="otherprofile">
                  <img
                    style={{ width: '70px' }}
                    src={profileImage}
                    alt="프사"
                  />
                </div>
                <p className="temp">{title}</p>{' '}
                {/* 각 박스에 질문 제목을 출력 */}
                {/* 질문 제목 이외의 데이터 출력 예시 */}
                {/* <p>{profileImage}</p> */}
                {/* <p>{quesHashs[index].map(hashTag => `#${hashTag.hashtag}`).join(' ')}</p> */}
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
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            질문하러 가기
          </Link>
        </button>
      </div>
    </>
  );
};
export default SearchPage;
