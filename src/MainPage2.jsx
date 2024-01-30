//@ts-nocheck
import profile1 from 'src/p1.svg';
import profile2 from 'src/p2.svg';
import profile3 from 'src/p3.svg';
import profile4 from 'src/p4.svg';
import profile5 from 'src/p5.svg';
import profile6 from 'src/p6.svg';
import alarmimg from 'src/alarm.svg'
import React, { useState, useEffect } from "react";
import { styles } from "./components/MainPageDetail/style";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Qdummy from "./Qdummy";

function MainPage() {
    const [imgitems, setImgItems] = useState([profile1,profile2,profile3,profile4,profile5,profile6]); //기본 프로필 이미지 배열
    const [items, setItems] = useState(Array.from({ length: 12 })); // 초기에 불러올 아이템 수
    const [hasMore, setHasMore] = useState(true); // 더 불러올 아이템이 있는지
    const [isHovered, setIsHovered] = useState(false);

    const fetchMoreData = () => {
        if (items.length >= 24) { // 최대 아이템 수
            setHasMore(false);
            return;
        }
    };

    const addQdummy = () => {
      setItems(items.concat(Array.from({ length: 1 })));
    } //새로운 데이터 컴포넌트 추가

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const linkStyle = {
        textDecoration: isHovered ? 'underline' : 'none',
        cursor: 'pointer',
        color: "#FFF",
        fontFamily: "Pretendard",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal"
      };

    return (
        <div style={styles.container}> 
            <div style={styles.DummyBox}>
                {/* 작은 메뉴창  */}
                <div style={styles.sidebar}>
                    <div style={styles.menu}>
                        <Link to = "/Login1" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseLeave}>로그아웃</Link>
                    </div>
                    {/* 알림창 */}
                    <div style={styles.alarm}>
                        <img src={alarmimg}></img>
                    </div>
                </div>
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
                    {items.map((item, index) => (
                        <Qdummy key={index}  profileImg={imgitems[index % imgitems.length]}/> // 이 부분에서 Qdummy 컴포넌트를 사용하여 렌더링을 해줍니다.
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default MainPage;