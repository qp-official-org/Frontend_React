// 메일 인증 컴포넌트
//@ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/logindetail/style";
import { useNavigate } from "react-router-dom";

// 로그인버튼 기능, 이전페이지 기능

function Certify() {
    const [CertifyNum, setCertifyNum] = useState("");
    const [isValidNum, setIsValidNum] = useState(false);
    const navigate = useNavigate();

    const handleNumChange = (event) => {
        const newNum = event.target.value;
        setCertifyNum(newNum);
        //여기에서 닉네임 유효성 체크 후, isValidNum 상태 업데이트
        const isValid = 
            newNum.length == 8 && /^[a-zA-Z0-9!@#$%^&*()]*$/g.test(newNum);

        setIsValidNum(isValid);
    };

    const handleNextButtonClick = () => {
        if(isValidNum){
        //유효한 경우 다음 페이지로 이동하거나 다른 동작 수행
            navigate('/Nickname');
        }else{
            alert("인증번호를 다시 입력해주세요.") //알림창 푸시
        }
    }
    const BackBtn = () => {
        navigate('/'); // 바로 이전 페이지로 이동
        };
        
    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div>
                    <div>
                    <button onClick={BackBtn} style={styles.previous}>X</button>
                    </div>
                    <div style={styles.buttonBox}>
                        <h1 style = {styles.pageTitle}>인증번호 입력</h1>
                        <input placeholder="큐피 메일(qp.official.ac@gmail.com)로 받은 인증번호를 입력해주세요." style = {styles.bar} 
                        id="CertifyNum" type="text" value={CertifyNum} onChange={handleNumChange}></input>
                            <div class="help">
                                {isValidNum ? (
                                    <span class="success" style = {{color: "green", fontFamily: "Pretendard", fontSize: "30px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal"}}></span> //이 부분은 임의로 작성해둔 것 (메일로 전송받은 인증번호를 어떻게 확인할지에 대해 논의 필요<)
                                ) : (
                                    <span class="fail" style = {{position:"absolute", color:'#F00', fontFamily: "Pretendard", fontSize: "30px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", top:"57%", left:"20%"}}>틀린 인증번호 입니다.</span>
                                )}
                            </div>
                        <button style = {styles.loginButton} onClick={handleNextButtonClick}>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certify;