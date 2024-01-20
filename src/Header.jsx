// @ts-nocheck
import React from "react";
import { styles } from "./components/qdetail/style";
import { useState } from "react";

function Header() {
    const [searchClick, setSearchClick] = useState(false);
    const [searchContent, setSearchContent] = useState('')
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    const handleSearchBlock = () => {
        setIsSearchClicked(!isSearchClicked)
        console.log('1')
    }
    const handleSearchClick = (event) => {
        setSearchContent(event.target.value)
    }
    return (
        <div style={styles.header_block}>
            <div style={{ color: "#EB7125", fontWeight: 'bold' }}>큐피로고</div>
            <div onClick={handleSearchBlock} style={isSearchClicked ? styles.search_btn_after : styles.search_btn_before}>
                {isSearchClicked ? null : <div>
                    <div style={styles.header_search_before}>돋보기이미지</div>
                    <div style={{ width: '9vh' }}></div>
                    <input style={styles.header_input}
                        placeholder="질문하기 전 검색하기"
                        value={searchContent}
                        onChange={handleSearchClick} />
                </div>}

            </div>{/* timing-function로 돋보기모양 div 이동, 
            좌우로 늘리기, 
            input태그 event/value 내용 props로 전달 */}
            <div>로그인/프로필</div>
        </div >
    )
}

export default Header;