//프로필설정페이지
//@ts-nocheck
import profileimg from 'src/basic.svg';
import buttonimg from 'src/button.svg';
import React from "react";
import { useState } from "react";
import { styles } from "src/components/logindetail/style";
import { useNavigate } from "react-router-dom";
import Dropdown from './Dropdown';

function Profile() {
    const navigate = useNavigate();

    const BackBtn = () => {
        navigate('/Nickname'); // 바로 이전 페이지로 이동
        };

    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
    }

    //설정완료 유효성 검사 !
    // const handleNextButtonClick = () => {
    //     if(isValidNickname){
    //     //유효한 경우 다음 페이지로 이동하거나 다른 동작 수행
    //     navigate('/MainPage');
    // }
    // }

    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div style = {styles.buttonBox}>
                    <h1>프로필 설정</h1>
                    <button onClick={BackBtn} style={styles.previous}>←</button>
                    <div>
                        <img src={profileimg} alt = "basic .img" style={styles.pimg}></img>
                        <img src={buttonimg} onClick={() => toggleMenu()} alt = "button .img" style={styles.bimg}></img>
                        {isOpen && <Dropdown />}
                    </div>
                    <button style = {styles.nextButton}>설정완료</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;