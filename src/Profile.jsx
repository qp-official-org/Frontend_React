//프로필설정페이지
//@ts-nocheck
import defaultProfileImg from 'src/basic.svg';
import buttonimg from 'src/button.svg';
import React from "react";
import { useState } from "react";
import { styles } from "src/components/logindetail/style";
import { useNavigate } from "react-router-dom";
import Dropdown from './Dropdown';

function Profile() {
    const navigate = useNavigate();
    const [IsComplete, setIsComplete] = useState(false);
    const [profileimg, setProfileImg] = useState(defaultProfileImg);
    const [isOpen, setMenu] = useState(false);

    const BackBtn = () => {
        navigate('/Nickname'); // 바로 이전 페이지로 이동
        };

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
    };

    const handleProfileChange = (newProfileImg) => {
        setProfileImg(newProfileImg);
        setIsComplete(isComplete => !isComplete); //프로필을 한 번 변경시 이동가능
    };

    const handleNextButtonClick = () => {
        if(IsComplete){
        //유효한 경우 다음 페이지로 이동
            navigate('/MainPage');
         }
    }

    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div style = {styles.buttonBox}>
                    <h1>프로필 설정</h1>
                    <button onClick={BackBtn} style={styles.previous}>←</button>
                    <div>
                        <img src={profileimg} alt = "default .img" style={styles.defaultProfileImg}></img>
                        <img src={buttonimg} onClick={() => toggleMenu()} alt = "button .img" style={styles.buttonimg}></img>
                        {isOpen && <Dropdown onProfileChange ={handleProfileChange}/>}
                    </div>
                    <button style = {styles.nextButton} onClick={handleNextButtonClick}>설정완료</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;