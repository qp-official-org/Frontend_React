//프로필설정페이지
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

function Profile() {
    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div style = {styles.buttonBox}>
                    <h1>프로필 설정</h1>
                    <input placeholder = '프로필 설정 자리' style = {styles.bar}></input>
                    <button style = {styles.nextButton}>설정완료</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;