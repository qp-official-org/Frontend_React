// @ts-nocheck
import React from "react";
import { styles } from "./components/qdetail/style";
import { useState } from "react";

function Header() {
    const [searchClick, setSearchClick] = useState(false);
    const [searchContent, setSearchContent] = useState('')
    const handleSearchClick = (event) => {
        setSearchContent(event.target.value)
    }
    return (
        <div style={styles.header_block}>
            <div style={{ color: "#EB7125", fontWeight: 'bold' }}>큐피로고</div>
            <div style={styles.search_btn}>
                <div>돋보기이미지</div>
                <input style={{
                    ...styles.header_input,
                    '::placeholder': { color: 'white' },
                }}
                    placeholder="질문하기 전 검색하기"
                    value={searchContent}
                    onChange={handleSearchClick}></input>
            </div>{/* timing-functino로 돋보기모양 div 이동, 
            좌우로 늘리기, 
            input태그 event/value 내용 props로 전달 */}
            <div>로그인/프로필</div>
        </div>
    )
}

export default Header;