//닉네임설정페이지
//@ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/logindetail/style";
import { useNavigate } from "react-router-dom";

function Nickname() {
    const [nickname, setNickname] = useState("");
    const [isValidNickname, setIsValidNickname] = useState(false);
    const navigate = useNavigate();

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
        //유효한 경우 다음 페이지로 이동하거나 다른 동작 수행
            navigate('/Profile');
        }else{
            alert("사용할 수 없는 닉네임입니다.") //알림창 푸시
        }
    }

    const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동
    };

    return (
        // 주황색 화면
        <div style={styles.container}> 
            {/* 흰 박스 */}
            <div style={styles.whitebox}>
                <div style= {styles.buttonBox}>
                    <h1>닉네임 설정</h1>
                    <button onClick={onClickBtn} style={styles.previous}>←</button>
                    <h5>6글자 이내, 띄어쓰기 x</h5>
                    <input placeholder = '큐피에서 사용할 닉네임을 입력해주세요.' style = {styles.bar} 
                    id="nickname" type="text" value={nickname} onChange={handleNicknameChange}></input>
                        <div class="help">
                            {isValidNickname ? ( 
                                <span class="success" style = {{color:'green'}}>사용할 수 있는 닉네임입니다.</span>
                                ) : (
                                <span class="fail" style = {{color:'red'}}>사용할 수 없는 닉네임입니다.</span>
                                )}
                        </div>
                    <button style = {styles.nextButton} onClick={handleNextButtonClick}>다음</button>
                </div>
            </div>
        </div>
    );
}

export default Nickname;