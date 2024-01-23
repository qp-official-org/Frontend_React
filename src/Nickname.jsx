//닉네임설정페이지
//@ts-nocheck
import React from "react";
import { styles } from "src/components/logindetail/style";
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
                    {/* <label for="nickname">닉네임 설정</label> */}
                    <h5>6글자 이내, 띄어쓰기 x</h5>
                    <input placeholder = '큐피에서 사용할 닉네임을 입력해주세요.' style = {styles.bar} id="nickname" type="text"></input>
                    <div class="help">
                        <span class="success">사용할 수 있는 닉네임입니다.</span>
                        <span class="fail">사용할 수 없는 닉네임입니다.</span>
                    </div>
                    <button style = {styles.nextButton}>다음</button>
                </div>
            </div>
        </div>
    );
}

export default Nickname;