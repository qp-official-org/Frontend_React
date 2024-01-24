// @ts-nocheck
import React from "react";
import { styles } from "./components/qdetail/style";
import { useState } from "react";

function Header() {
    const [searchClick, setSearchClick] = useState(false);
    const [searchContent, setSearchContent] = useState('')
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    const [isLogined, setIsLogined] = useState(false)
    const handleLogin = () => {
        setIsLogined(true)
    }
    const handleSearchBlock = () => {
        setIsSearchClicked(!isSearchClicked)
        console.log(isSearchClicked)
    }
    const handleSearchClick = (event) => {
        setSearchContent(event.target.value)
    }
    const handleSearchBlockBack = () => {
        setIsSearchClicked(!isSearchClicked)
        console.log(isSearchClicked)
    }
    const handleLogout = () => {
        setIsLogined(false)
    }
    return (
        <div style={styles.header_block}>
            <div style={{ color: "#EB7125", fontWeight: 'bold', width: '6vw' }}>큐피로고</div>
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
                <div onClick={handleLogout} style={{ marginTop: '5%', marginRight: '10%', textAlign: 'right', fontWeight: '600', fontSize: '10px', color: 'white', textDecoration: 'underline' }}>로그아웃</div>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '9vh', height: '9vh', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid white' }}></div>
                    <div style={{ fontWeight: '900', fontSize: '21px', color: 'white', margin: '4.5%' }}>닉네임</div>
                    <div style={{ fontWeight: '900', fontSize: '21px', color: 'white', margin: '4.5%' }}>100P</div>
                    <div style={{ background: 'white', width: '7.617vw', height: "1.597vh", borderRadius: '20px', fontWeight: '700', fontSize: '10px', margin: '4.5%' }}>충전하러 가기</div>
                </div>
            </div>
                :
                <div onClick={handleLogin} style={styles.header_not_login}>
                    <div style={{ color: 'white', marginTop: '11%' }}>로그인하기</div>
                </div>}

        </div >
    )
}

export default Header;