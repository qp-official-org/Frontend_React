//@ts-nocheck
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { styles } from "src/components/MainPageDetail/style";
import InfiniteScroll from 'react-infinite-scroll-component';
import Qdummy from "src/Qdummy";

function MainPage2() {
    const [items, setItems] = useState(Array.from({ length: 12 })); // 초기에 불러올 아이템 수
    const [hasMore, setHasMore] = useState(true); // 더 불러올 아이템이 있는지

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
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p>
                        <b>모든 게시물을 확인하셨습니다.</b>
                    </p>
                } style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: "15px" }}
                >
                {hasMore? fetchMoreData: addQdummy}
                {items.map((i, index) => (
                    <Qdummy key={index} /> // 이 부분에서 Qdummy 컴포넌트를 사용하여 렌더링을 해줍니다.
                ))}
            </InfiniteScroll>
          </div>
        </div>
    );
}

export default MainPage2;