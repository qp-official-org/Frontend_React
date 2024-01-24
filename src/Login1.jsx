//로그인페이지1
//@ts-nocheck

import React from "react";
import { styles } from "src/components/logindetail/style";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// 이전페이지 기능, 카카오/구글/네이버 로그인 기능, 전문가 전용 로그인 인증번호 페이지 이동

function Login1() {
    const navigate = useNavigate();
    const BackBtn = () => {
        navigate('/Main'); // 바로 이전 페이지로 이동
        };
    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div>
                    <div>
                        <h1 style={styles.logo}>큐피 로고</h1>
                    </div>
                    <div>
                        <button onClick={BackBtn} style={styles.previous}>X</button>
                    </div>
                    <div style={styles.buttonBox}>
                        <button style={styles.button1}>네이버로그인</button>
                        <button style={styles.button2}>카카오로그인</button>
                        <button style={styles.button3}>구글 로그인</button> 
                    </div>
                    <div style={styles.text}>
                        <span style={styles.text1}>전문가이신가요?</span>
                        <Link to = "/Certify" style={styles.text2}>전문가 계정으로 로그인하기</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login1;