//로그인페이지1
//@ts-nocheck
import nlogo from "src/naver.svg";
import klogo from "src/kakao.svg";
import glogo from "src/google.svg";
import React from "react";
import { styles } from "src/components/logindetail/style";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 이전페이지 기능, 카카오/구글/네이버 로그인 기능, 전문가 전용 로그인 인증번호 페이지 이동

function Login1() {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    
    const BackBtn = () => {
        navigate('/Main'); // 바로 이전 페이지로 이동
        };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const linkStyle = {
        textDecoration: isHovered ? 'underline' : 'none',
        cursor: 'pointer',
        color: "#EB7125",
        fontFamily: "Pretendard",
        fontSize: "22px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal"
      };

    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div>
                    <div class="logo">
                        <h1 style={styles.logo}>큐피 로고</h1>
                    </div>

                    <div class="back">
                        <button onClick={BackBtn} style={styles.previous}>X</button>
                    </div>

                    <div style={styles.buttonBox}>
                        <div class="naverLogin">
                            <button style={styles.button1}>네이버 로그인</button>
                            <img src={nlogo} style={{position: "absolute", top:"36.7%", left:"35%"}}></img>
                        </div>
                        <div class="kakaoLogin">
                            <button style={styles.button2}>카카오 로그인</button>
                            <img src={klogo} style={{position: "absolute", top:"53%", left:"35%"}}></img>
                        </div>
                        <div class="googleLogin">
                            <button style={styles.button3}>구글 로그인</button>
                            <img src={glogo} style={{position: "absolute", top:"68%", left:"35%"}}></img>
                        </div>
                    </div>

                    <div style={styles.text}>
                        <span style={styles.text1}>전문가이신가요?</span>
                        <Link to = "/Certify" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseLeave}>전문가 계정으로 로그인하기</Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Login1;