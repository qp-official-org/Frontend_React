// @ts-nocheck
import React from "react";
import Header from "./Header";
import { styles } from "./components/registerq/style";

function Qregister() {
    return (<div>
        <Header />
        <div>
            <div>제목입력칸</div>
            <div>본문입력칸</div>
            <div>해시태그</div>
            <div>난이도</div>
            <div>질문 등록 시 유의사항(필수)</div>
            <button>등록</button>
        </div>
    </div>)
}

export default Qregister;