//컴포넌트 합칠 파일
//@ts-nocheck
import React from "react";
import { styles } from "src/components/logindetail/style";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Login1() {
    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                {/* 로그인1페이지 */}
                <div>
                    <div>
                        <h1 style={styles.logo}>큐피 로고</h1>
                    </div>
                    <div>
                        <h1 style = {styles.previous}>X</h1>
                    </div>
                    <div style={styles.buttonBox}>
                        {/* 해당 div 완성되면 컴포넌트화 시키기  */} 
                        {/* 클릭하면 컴포넌트 사이에서 이동가능하게 라우터.? */}
                        <button style={styles.button1}>네이버로그인</button>
                        <button style={styles.button2}>카카오로그인</button>
                        <button style={styles.button3}>구글 로그인</button> 
                    </div>
                    <div style={styles.text}>
                        <span style={styles.text1}>전문가이신가요?</span>
                        <Link to = "/Certify" style={styles.text2}>전문가 계정으로 로그인하기</Link>
                    </div>
                </div>

                {/* 로그인2페이지 (인증번호 입력페이지) */}
                {/* <div style={styles.buttonBox}>
                    <h1 style = {styles.contents}>인증번호 입력</h1>
                    <input placeholder = '큐피 메일(qp.official.ac@gmail.com)로 받은 인증번호를 입력해주세요.' style = {styles.bar}></input>
                    <button style = {styles.loginButton}>로그인</button>
                </div> */}

                {/* 로그인3페이지(닉네임 설정) */}
                {/* <div style= {styles.buttonBox}>
                    <h1>닉네임 설정</h1>
                    <h5>6글자 이내, 띄어쓰기 x</h5>
                    <input placeholder = '큐피에서 사용할 닉네임을 입력해주세요.' style = {styles.bar}></input>
                    <button style = {styles.nextButton}>다음</button>
                </div> */}
                {/* 로그인4페이지(프로필 설정) */}
                {/* <div style = {styles.buttonBox}>
                    <h1>프로필 설정</h1>
                    <input placeholder = '프로필 설정 자리' style = {styles.bar}></input>
                    <button style = {styles.nextButton}>설정완료</button>
                </div> */}
            </div>
        </div>
    );
}

export default Login1;
