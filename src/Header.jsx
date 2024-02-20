// @ts-nocheck
import React from 'react';
import Qlogo from "src/Subtract.svg";
import Qicon from 'src/tabler_search.svg';
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
    const ls = localStorage.getItem("isLoggedIn");
    const [searchClick, setSearchClick] = useState(false);
    const [searchContent, setSearchContent] = useState('');
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [accesstoken, setAccessToken] = useRecoilState(accesstokenState);
    const [userId, setUserId] = useRecoilState(userIdState);
    const [isLogined, setIsLogined] = useState(false);
    const [userInfo, setUserInfo] = useState([])

    const gAccessToken = localStorage.getItem('accesstoken')
    const gUserId = localStorage.getItem('userId')
    const totalLogin = () => {
        gAccessToken && gUserId ? handleLogin() : handleLogout()
    }
    const GoLogin = () => {
        if(!ls){
            navigate('/');
        }
    }

    const handleLogin = () => {
    //     if(ls){
    //         setIsLogined(true);
    //         setAccessToken(gAccessToken);
    //         setUserId(gUserId);
    //         getUserInfo();
    //     }else{navigate("/");
    // }
        setIsLogined(true);
        setAccessToken(gAccessToken);
        setUserId(gUserId);
        getUserInfo();
    }

    const handleLogout = () => {
        setIsLogined(false);
        setAccessToken(null); // 로그아웃 시 엑세스 토큰 초기화
        setUserId(null)
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('accesstoken')
        localStorage.removeItem('userId')
    }

    const GoMain = () => {
        navigate("/mainpage");
      };

      
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
    };

    return (
        <div style={styles.header_block}>
            <img src={Qlogo} style={{width:"50px"}}></img>
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
                        <div style={styles.header_search_after}>
                            <img src={Qicon} style={{alignItems: 'center', margin:"22%"}}></img>
                        </div>
                    </div>
                ) : (
                    <div onClick={handleSearchBlock} style={styles.header_center_before}>
                        <div style={styles.header_search_before}>
                            <img src={Qicon} style={{alignItems: 'center', margin:"22%"}}></img>
                        </div>
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
                        <img src={userInfo.profileImage} style={styles.header_profile_img}></img>
                        <div style={styles.header_profile_nickname}>{userInfo.nickname}</div>
                        <div style={styles.header_profile_point}>{userInfo.point}</div>
                        <div style={styles.header_profile_charge_btn}>충전하러 가기</div>
                    </div>
                </div>
            ) : (
                <div onClick={handleLogin, GoLogin} style={styles.header_not_login}>
                    <div style={styles.header_login_btn}>로그인하기</div>
                </div>
            )}
        </div>
    );
}

export default Header;
