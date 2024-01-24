//프로필설정페이지
//@ts-nocheck
import React from "react";
import { styles } from "src/components/logindetail/style";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const BackBtn = () => {
        navigate('/Nickname'); // 바로 이전 페이지로 이동
        };
    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div style = {styles.buttonBox}>
                    <h1>프로필 설정</h1>
                    <button onClick={BackBtn} style={styles.previous}>←</button>
                    <input placeholder = '프로필 설정 자리' style = {styles.bar}></input>
                    <button style = {styles.nextButton}>설정완료</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;