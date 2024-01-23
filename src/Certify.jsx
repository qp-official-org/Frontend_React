// 메일 인증 컴포넌트
//@ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/logindetail/style";
import { useNavigate } from "react-router-dom";
// import { Input } from 'src/components/Certify';

// 로그인버튼 기능, 이전페이지 기능
const BackButton = () => {
    const navigate = useNavigate(); //변수 할당시켜서 사용
    const onClickBtn = () => {
      navigate(-1); // 바로 이전 페이지로 이동
    };
    return (
      <button onClick={onClickBtn}>X</button>
    );
  };

const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
// const passwordRegEx = /^[A-Za-z0-9]{8,20}$/
// const [password, setPassword] = React.useState("");
// const [passwordChk, setPasswordChk] = React.useState("");

const emailCheck = (username) => {
    if(username.match(emailRegEx)===null) { //형식에 맞지 않을 경우 아래 콘솔 출력
      console.log('인증번호가 틀렸습니다.');
      return;
    }else{ // 형식에 맞을 경우 true
        return emailRegEx.test(username); 
    }
}

function Certify() {
    const [username, setUsername] = React.useState("");
    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div>
                    <div>
                        <h1 style = {styles.previous}>X</h1>
                    </div>
                    <div style={styles.buttonBox}>
                        <h1 style = {styles.contents}>인증번호 입력</h1>
                        {/* <input placeholder = '큐피 메일(qp.official.ac@gmail.com)로 받은 인증번호를 입력해주세요.' style = {styles.bar}></input> */}
                        {/* <Certify> */}
                        <input _onChange={(e)=>{setUsername(e.target.value); emailCheck(e.target.value)}} placeholder="큐피 메일(qp.official.ac@gmail.com)로 받은 인증번호를 입력해주세요." name="signup_id" type="email"></input>
                        {/* </Certify> */}
                        <button style = {styles.loginButton}>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certify;