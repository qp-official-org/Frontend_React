//메인화면 레이아웃
//@ts-nocheck
import React, {useState, useEffect} from "react";
import { styles } from "src/components/MainPageDetail/style";
import { useNavigate } from "react-router-dom"; //헤더에 로그인 버튼 연동할 때 사용할 예정
import Qdummy from "src/Qdummy";
import InfiniteScroll from 'react-infinite-scroll-component';

//요소로는 프로필 사진, 어린이 여부, 업로드 시간, 제목, 댓글 전체 수, 전문가 답변 수, 해시태그
function MainPage() {
  const[items, settItems] = useState(Array.from({length:1})); //초기에 불러올 아이템 수 
  const [hasMore, setHasmore] = useState(true); //더 불러올 아이템이 있는지
  const fetchMoreData = () => {
    if(items.length >= 12){
      setHasmore(false);
      return;
    }
  }
  setTimeout(()=>{
    settItems(items.concat(Array.from({length:1})));
  },1500);

    return (
      <div style={styles.container}> 
        <div style={styles.DummyBox}>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>모든 게시물을 확인했습니다.</b>
                    </p>
                }
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: "15px" }} //그리드의 열을 1개로 나누고, 각 열의 너비는 규등하게
                >
                {items.map((i, index) => (
                    <Qdummy key={index} /> // 이 부분에서 Qdummy 컴포넌트를 사용하여 렌더링을 해줍니다.
                ))}
            </InfiniteScroll>
          </div>
        </div>
    );
}

export default MainPage;