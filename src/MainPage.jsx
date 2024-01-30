// //메인화면 레이아웃
//@ts-nocheck
// import React, {useState, useEffect} from "react";
// import { styles } from "src/components/MainPageDetail/style";
// import { useNavigate } from "react-router-dom"; //헤더에 로그인 버튼 연동할 때 사용할 예정
// import Qdummy from "src/Qdummy";

// //요소로는 프로필 사진, 어린이 여부, 업로드 시간, 제목, 댓글 전체 수, 전문가 답변 수, 해시태그
// function MainPage() {
//   const[items, setItems] = useState(Array.from({length:9})); //초기에 불러올 아이템 수 (일단 9개)
//   const[currentPage, setCurrentPage] = useState(1); //현재 페이지
//   const[itemsPerPage] = useState(1); //페이지 당 아이템 수

//   //현재 페이지에 따라 아이템 불러오기
//   const indexOfLastItem = currentPage*itemsPerPage;
//   const inexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(inexOfFirstItem, indexOfLastItem);

//   //페이지 이동
//   const paginate = pageNumber => setCurrentPage(pageNumber);

//     return (
//       <div style={styles.container}> 
//         <div style={styles.DummyBox}>
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gridGap: "15px" }}>
//             {currentItems.map((item, index) => (
//               <Qdummy key={index} />
//             ))}
//           </div>

//           {/* 페이지네이션 컴포넌트 */}
//           <div>
//             {Array(Math.ceil(items.length / itemsPerPage)).fill().map((_, i) => (
//               <button onClick={() => paginate(i + 1)}>{i + 1}</button>
//             ))}
//           </div>
//           </div>
//         </div>
//     );
// }

// export default MainPage;

// import React, {useState} from "react";
// import { styles } from "src/components/MainPageDetail/style";
// import { useNavigate } from "react-router-dom";
// import Qdummy from "src/Qdummy";
// import InfiniteScroll from 'react-infinite-scroll-component';

// function MainPage() {
//   const[items, setItems] = useState(Array.from({length:1}));
//   const [hasMore, setHasMore] = useState(true);

//   const fetchMoreData = async () => {
//     if(items.length >= 12){
//       setHasMore(false);
//       return;
//     }

//     await new Promise((resolve) =>
//       setTimeout(() => resolve(), 1500)
//     );

//     setItems((prevItems) => prevItems.concat(Array.from({ length: 1 })));
//   };

//   return (
//     <div style={styles.container}> 
//       <div style={styles.DummyBox}>
//           <InfiniteScroll
//               dataLength={items.length}
//               next={fetchMoreData}
//               hasMore={hasMore}
//               loader={<h4>Loading...</h4>}
//               endMessage={
//                   <p style={{ textAlign: 'center' }}>
//                       <b>Yay! You have seen it all</b>
//                   </p>
//               }
//               style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: "15px" }}
//               >
//               {items.map((i, index) => (
//                   <Qdummy key={index} />
//               ))}
//           </InfiniteScroll>
//         </div>
//       </div>
//   );
// }

// export default MainPage;

import React, { useState, useEffect } from "react";
import { styles } from "src/components/MainPageDetail/style";
import InfiniteScroll from 'react-infinite-scroll-component';
import Qdummy from "src/Qdummy";

function MainPage() {
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

export default MainPage;