// @ts-nocheck
import React from "react";
import { styles } from "./components/qdetail/style";
import { useState } from "react";

function Header() {
    const [searchClick, setSearchClick] = useState(false);
    const [searchContent, setSearchContent] = useState('')
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    const handleSearchBlock = () => {
        setIsSearchClicked(true)
    }
    const handleSearchClick = (event) => {
        setSearchContent(event.target.value)
    }
    const handleSearchBlockBack = () => {
        setIsSearchClicked(false)
    }
    return (
        <div style={styles.header_block}>
            <div style={{ color: "#EB7125", fontWeight: 'bold' }}>큐피로고</div>
            <div onClick={handleSearchBlock} style={isSearchClicked ? styles.search_btn_after : styles.search_btn_before}>
                {isSearchClicked ?
                    <div style={{ display: 'flex' }}>
                        <div onClick={handleSearchBlockBack} style={{ marginLeft: '3%', color: 'white', fontSize: '43px', fontWeight: 'bold' }}>←</div>
                        <input placeholder="단어 형태로 검색어를 입력하세요" style={{ border: 'none', background: 'none', color: 'white', marginLeft: '2%', width: "40vw" }}></input>
                        <div style={styles.header_search_after}></div>
                    </div>
                    :
                    <div style={{ display: 'flex', height: '6.8vh', textAlign: 'center' }}>
                        <div style={styles.header_search_before}></div>
                        <div style={{ ...styles.header_input, color: 'white', marginLeft: '9.5vw', textAlign: 'center', marginTop: '2vh' }}>질문하기 전 검색하기</div>
                    </div>}

            </div>{/* timing-function로 돋보기모양 div 이동, 
            좌우로 늘리기, 
            input태그 event/value 내용 props로 전달 */}
            <div style={{ justifyContent: 'center', textAlign: 'center', borderRadius: '40px', background: 'linear-gradient(to top, rgba(235, 113, 37, 1),rgba(203, 78, 0, 1))', width: '10.76vw', height: '6.83vh' }}><div style={{ color: 'white', marginTop: '11%' }}>로그인하기</div></div>
        </div >
    )
}

export default Header;