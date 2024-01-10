import React from "react";
import { styles } from "src/components/logindetail/style";

function Login() {
    return (
        <div style={styles.container}>
            <div style={styles.box}>
                {/* 로그인1페이지
                <div style={styles.buttonBox}> */}
                    {/* 해당 div 완성되면 컴포넌트화 시키기  */} 
                    {/* 클릭하면 컴포넌트 사이에서 이동가능하게 라우터.? */}
                    {/* <h1>큐피로고</h1>
                    <button style={styles.button}>네이버로그인</button>
                    <button style={styles.button}>카카오로그인</button>
                    <button style={styles.button}>구글 로그인</button> 
                    <h5>전문가이신가요? 전문가 로그인</h5> 
                </div> */}
                로그인2페이지
                <div style={styles.buttonBox}>
                    <h1>인증번호 입력</h1>
                    <input placeholder = '큐피 메일(qp.official.ac@gmail.com)로 받은 인증번호를 입력해주세요.' style = {styles.bar}></input>
                    <button style = {styles.button2}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
