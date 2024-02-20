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
    //여기에서 닉네임 유효성 체크
    const isValid =
      newNickname.length <= 6 && /^[a-zA-Z0-9가-힣]*$/g.test(newNickname) && !/\s/g.test(newNickname);

    setIsValidNickname(isValid); //isValidNickname 상태 업데이트
  };

  const handleNextButtonClick = () => {
    if (isValidNickname) {
      //isValidNickname가 유효한 경우 다음 페이지로 이동
      navigate('/setProfile');
    }
  }

  const BackBtn = () => {
    navigate(-2); // 바로 이전 페이지로 이동 (닉네임의 이전페이지를 0.00페이지로 해야할지 아니면 정말 이전페이지로 해야할지)
  };

  return (
    // 주황색 화면
    <div style={styles.container}>
      {/* 흰 박스 */}
      <div style={styles.whitebox}>
        <div style={styles.buttonBox}>
          <h1 style={styles.pageTitle}>닉네임 설정</h1>
          <button onClick={BackBtn} style={styles.previous2}>←</button>
          <h5 style={{ position: "absolute", top: "275px", fontFamily: "Pretendard", fontSize: "20px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>6글자 이내, 띄어쓰기 x</h5>
          <input placeholder='큐피에서 사용할 닉네임을 입력해주세요.' style={styles.bar2}
            id="nickname" type="text" value={nickname} onChange={handleNicknameChange}></input>
          <div class="help">
            {isValidNickname ? (
              <span class="success" style={{ position: "absolute", color: '#22C807', fontFamily: "Pretendard", fontSize: "30px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", top: "57%", left: "23%" }}>사용할 수 있는 닉네임입니다.</span>
            ) : (
              <span class="fail" style={{ position: "absolute", color: '#F00', fontFamily: "Pretendard", fontSize: "30px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", top: "57%", left: "23%" }}>사용할 수 없는 닉네임입니다.</span>
            )}
          </div>
          <button style={styles.nextButton} onClick={handleNextButtonClick}>다음</button>
        </div>
      </div>
    </div>
  );
}

export default Nickname;