// @ts-nocheck
import React from 'react';
import { styles } from './components/qdetail/style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchContent } from './Context';
import { accesstokenState, loginState } from "./atom/atoms";
import { userIdState } from "./atom/atoms";
import { useSetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import axios from 'axios';

function Header() {
    const [searchClick, setSearchClick] = useState(false);
    const [searchContent, setSearchContent] = useState('');
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [accesstoken, setAccessToken] = useRecoilState(accesstokenState);
    const [userId, setUserId] = useRecoilState(userIdState);
    const [isLogined, setIsLogined] = useState(false);
    const [userInfo, setUserInfo] = useState([])
    //localStorage에서 getItem하고
    //값이 있으면 로그인 상태 바꾸고, recoil에 저장
    //값이 없으면 로그인 상태 그대로두고 

    const gAccessToken = localStorage.getItem('accesstoken')
    const gUserId = localStorage.getItem('userId')
    const totalLogin = () => {
        gAccessToken && gUserId ? handleLogin() : handleLogout()
    }

    const handleLogin = () => {
        setIsLogined(true);
        setAccessToken(gAccessToken);
        setUserId(gUserId);
        getUserInfo()
    }

    const handleLogout = () => {
        setIsLogined(false);
        setAccessToken(null); // 로그아웃 시 엑세스 토큰 초기화
        setUserId(null)
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('accesstoken')
        localStorage.removeItem('userId')
    }

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLogined(storedIsLoggedIn === 'true');
    }, []);

    useEffect(() => {
        totalLogin()
    }, []);

    const getUserInfo = async () => {
        try {
            const apiUrl = `http://52.78.248.199:8080/users/${gUserId}`;

            const headers = {
                accessToken: gAccessToken
            }
            const response = await axios.get(apiUrl, { headers });
            setUserInfo(response.data.result)
            console.log('Get 요청 성공:', response.data);
        } catch (error) {
            console.error('Get 요청 실패:', error);
        }
    };

    // 페이지 이동을 위한 코드 추가

    const { AsearchContent, setAsearchContent } = useSearchContent();
    const handleInputChange = (event) => {
        setSearchContent(event.target.value);
        setAsearchContent(event.target.value);
    };
    const navigate = useNavigate();
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && searchContent.trim() !== '') {
                // 엔터 키가 눌리고 검색어가 비어있지 않을 때 페이지 이동
                navigate('/search');
                console.log(AsearchContent);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [searchContent, navigate]);

    const handleSearchClick = (event) => {
        setSearchContent(event.target.value);
        setAsearchContent(event.target.value);
    }; //서버로 보낼 검색한 내용이 담긴 값
    const handleSearchBlockBack = () => {
        setIsSearchClicked(!isSearchClicked);
        console.log(isSearchClicked);
    };
    const handleSearchBlock = () => {
        setIsSearchClicked(!isSearchClicked);
        console.log(isSearchClicked);
    }

    return (
        <div style={styles.header_block}>
            <div style={{ color: '#EB7125', fontWeight: 'bold', width: '6vw' }}>
                큐피로고
            </div>
            {/*로고 이미지로 대체*/}
            <div
                style={
                    isSearchClicked ? styles.search_btn_after : styles.search_btn_before
                }
            >
                {isSearchClicked ? (
                    <div style={{ display: 'flex', transition: 'all 0.5s ease' }}>
                        <div
                            onClick={handleSearchBlockBack}
                            style={styles.header_back_search}
                        >
                            ←
                        </div>
                        <input
                            placeholder="단어 형태로 검색어를 입력하세요"
                            style={styles.header_input}
                            value={searchContent}
                            onChange={handleInputChange}
                        ></input>
                        <div style={styles.header_search_after}></div>
                    </div>
                ) : (
                    <div onClick={handleSearchBlock} style={styles.header_center_before}>
                        <div style={styles.header_search_before}></div>
                        <div style={styles.header_input_before}>질문하기 전 검색하기</div>
                    </div>
                )}
            </div>
            <div style={{ width: '6vw' }}></div>
            {isLogined ? (
                <div style={styles.header_profile}>
                    <div onClick={handleLogout} style={styles.header_logout}>
                        로그아웃
                    </div>
                    <div style={styles.header_profile_box}>
                        <div style={styles.header_profile_img}></div>
                        <div style={styles.header_profile_nickname}>{userInfo.nickname}</div>
                        <div style={styles.header_profile_point}>{userInfo.point}</div>
                        <div style={styles.header_profile_charge_btn}>충전하러 가기</div>
                    </div>
                </div>
            ) : (
                <div onClick={handleLogin} style={styles.header_not_login}>
                    <div style={styles.header_login_btn}>로그인하기</div>
                </div>
            )}
        </div>
    );
}

export default Header;
