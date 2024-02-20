// //메인화면 레이아웃
//@ts-nocheck
import axios from 'axios';
import profile1 from 'src/p1.svg';
import profile2 from 'src/p2.svg';
import profile3 from 'src/p3.svg';
import profile4 from 'src/p4.svg';
import profile5 from 'src/p5.svg';
import profile6 from 'src/p6.svg';
import React, { useState, useEffect } from "react";
import { styles } from "./components/MainPageDetail/style";
import InfiniteScroll from 'react-infinite-scroll-component';
import Qdummy from "./Qdummy";

function MainPage() {
  const [questions, setQuestions] = useState([]);
  const [imgitems, setImgItems] = useState([profile1, profile2, profile3, profile4, profile5, profile6]); //기본 프로필 이미지 배열
  const [items, setItems] = useState(Array.from({ length: 12 })); // 초기에 불러올 아이템 수
  const [hasMore, setHasMore] = useState(true); // 더 불러올 아이템이 있는지

  const getQuestions = async (page, size) => {
    try {
      const apiUrl = `http://52.78.248.199:8080/questions?page=${page}&size=${size}`;
      const response = await axios.get(apiUrl, { content_type: 'application/w-www-form-urlencoded' });
      setQuestions(response.data.result.questions);

      console.log('POST 요청 성공:', response);
    } catch (error) {
      console.error('POST 요청 실패:', error);
    }
  };

  getQuestions(0, 10);
  const fetchMoreData = () => {
    if (items.length >= 24) { // 최대 아이템 수
      setHasMore(false);
      return;
    }
  };

  const addQdummy = () => {
    setItems(items.concat(Array.from({ length: 1 })));
  } //새로운 데이터 컴포넌트 추가

  return (
    <div style={styles.container}>
      <div style={styles.DummyBox}>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading…</h4>}
          endMessage={
            <p>
              <b>모든 게시물을 확인하셨습니다.</b>
            </p>
          } style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: "15px" }}
        >
          {hasMore ? fetchMoreData : addQdummy}
          {questions.map((question, index) => (
            <Qdummy key={index} title={question.title} answerCount={question.answerCount} createdAt={question.createdAt} expertCount={question.expertCount}
              hashtag={question.hashtag} user={question.user} childStatus={question.childStatus} profileImg={question.user.profileImage} questionId={question.questionId} /> // 이 부분에서 Qdummy 컴포넌트를 사용하여 렌더링을 해줍니다.
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default MainPage;