// @ts-nocheck
import React from "react";
import { styles } from "./components/qdetail/style";
import { useState, useEffect } from "react";
import { accesstokenState, loginState } from "./atom/atoms";
import { userIdState } from "./atom/atoms";
import { useSetRecoilState } from "recoil";
import { useRecoilState } from "recoil";


function Header() {
    const [searchClick, setSearchClick] = useState(false);
    const [searchContent, setSearchContent] = useState('');
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [accesstoken, setAccessToken] = useRecoilState(accesstokenState);
    const [userId, setUserId] = useRecoilState(userIdState);
    const [isLogined, setIsLogined] = useState(false);

    const handleLogin = () => {
        setIsLogined(true);
        setAccessToken("eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjYsImlhdCI6MTcwODE1MjA4MSwiZXhwIjoxNzA4MTU5MjgxfQ.S3Zk45AasfR7ScdGjkfaqB8ykq-ffrMLxEoemoxLNRNvjcT9KdweX8jK9gur3FwMmLtHUlLsvvI7f4MjUBSHhA");
        setUserId("6");
        localStorage.setItem('isLoggedIn', 'true');
    }

    const handleLogout = () => {
        setIsLogined(false);
        setAccessToken(null); // 로그아웃 시 엑세스 토큰 초기화
        localStorage.removeItem('isLoggedIn');
    }

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLogined(storedIsLoggedIn === 'true');
    }, []);

    // 페이지가 처음 로드될 때 한 번만 실행
    useEffect(() => {
        if (isLogined) {
            handleLogin();
        }
    }, []);

    const handleSearchBlock = () => {
        setIsSearchClicked(!isSearchClicked);
        console.log(isSearchClicked);
    }

    const handleSearchClick = (event) => {
        setSearchContent(event.target.value);
    }

    const handleSearchBlockBack = () => {
        setIsSearchClicked(!isSearchClicked);
        console.log(isSearchClicked);
    }


    return (
        <div style={styles.header_block}>
            <div style={{ color: "#EB7125", fontWeight: 'bold', width: '6vw' }}>큐피로고</div>{/*로고 이미지로 대체*/}
            <div style={isSearchClicked ? styles.search_btn_after : styles.search_btn_before}>
                {isSearchClicked ?
                    <div style={{ display: 'flex', transition: 'all 0.5s ease' }}>
                        <div onClick={handleSearchBlockBack} style={styles.header_back_search}>←</div>
                        <input placeholder="단어 형태로 검색어를 입력하세요" style={styles.header_input}></input>
                        <div style={styles.header_search_after}></div>
                    </div>
                    :
                    <div onClick={handleSearchBlock} style={styles.header_center_before}>
                        <div style={styles.header_search_before}></div>
                        <div style={styles.header_input_before}>질문하기 전 검색하기</div>
                    </div>}

            </div>{/* timing-function로 돋보기모양 div 이동, 
            좌우로 늘리기, 
            input태그 event/value 내용 props로 전달 */}
            <div style={{ width: '6vw' }}></div>
            {isLogined ? <div style={styles.header_profile}>
                <div onClick={handleLogout} style={styles.header_logout}>로그아웃</div>
                <div style={styles.header_profile_box}>
                    <div style={styles.header_profile_img}></div>
                    <div style={styles.header_profile_nickname}>닉네임</div>
                    <div style={styles.header_profile_point}>100P</div>
                    <div style={styles.header_profile_charge_btn}>충전하러 가기</div>
                </div>
            </div>
                :
                <div onClick={handleLogin} style={styles.header_not_login}>
                    <div style={styles.header_login_btn}>로그인하기</div>
                </div>}

        </div >
    )
}

export default Header;