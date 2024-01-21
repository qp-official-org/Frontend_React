//닉네임설정페이지
//@ts-nocheck
import React from "react";
import { styles } from "src/components/logindetail/style";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const MyBackButton = () => {
    const navigate = useNavigate(); //변수 할당시켜서 사용
    const onClickBtn = () => {
      navigate(-1); // 바로 이전 페이지로 이동
    };
    return (
      <button onClick={onClickBtn}></button>
    );
  };

function Nickname() {
    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div style= {styles.buttonBox}>
                    <h1>닉네임 설정</h1>
                    <h5>6글자 이내, 띄어쓰기 x</h5>
                    <input placeholder = '큐피에서 사용할 닉네임을 입력해주세요.' style = {styles.bar}></input>
                    <button style = {styles.nextButton}>다음</button>
                </div>
            </div>
        </div>
    );
}

export default Nickname;