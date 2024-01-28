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

    const [nickname, setNickname] = useState("");
    const [isValidNickname, setIsValidNickname] = useState(false);

    const handleNicknameChange = (event) => {
        const newNickname = event.target.value;
        setNickname(newNickname);
        //여기에서 닉네임 유효성 체크 후, isValidNickname 상태 업데이트
        const isValid = 
            newNickname.length <= 6 && /^[a-zA-Z0-9가-힣]*$/g.test(newNickname) && !/\s/g.test(newNickname);

        setIsValidNickname(isValid);
    };

    const handleNextButtonClick = () => {
        if(isValidNickname){
        //유효한 경우 다음 페이지로 이동
            navigate('/MainPage');
        // }else{
        //     alert("사용할 수 없는 닉네임입니다.") //알림창 푸시
        // }
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