// @ts-nocheck
import React from 'react';
import { styles } from './components/qdetail/style';
import { useState, useEffect } from 'react';
//페이지이동위한 코드
import { useNavigate } from 'react-router-dom';
import { useSearchContent } from './Context';

function Header() {
  const [searchClick, setSearchClick] = useState(false);
  const [searchContent, setSearchContent] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
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

  const handleLogin = () => {
    setIsLogined(true);
  };
  const handleSearchBlock = () => {
    setIsSearchClicked(!isSearchClicked);
    console.log(isSearchClicked);
  };
  const handleSearchClick = (event) => {
    setSearchContent(event.target.value);
    setAsearchContent(event.target.value);
  }; //서버로 보낼 검색한 내용이 담긴 값
  const handleSearchBlockBack = () => {
    setIsSearchClicked(!isSearchClicked);
    console.log(isSearchClicked);
  };
  const handleLogout = () => {
    setIsLogined(false);
  };

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
      {/* timing-function로 돋보기모양 div 이동, 
            좌우로 늘리기, 
            input태그 event/value 내용 props로 전달 */}
      <div style={{ width: '6vw' }}></div>
      {isLogined ? (
        <div style={styles.header_profile}>
          <div onClick={handleLogout} style={styles.header_logout}>
            로그아웃
          </div>
          <div style={styles.header_profile_box}>
            <div style={styles.header_profile_img}></div>
            <div style={styles.header_profile_nickname}>닉네임</div>
            <div style={styles.header_profile_point}>100P</div>
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
