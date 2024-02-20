// 메일 인증 컴포넌트
//@ts-nocheck
import React from 'react';
import { useState } from 'react';
import { styles } from 'src/components/logindetail/style';
import { useNavigate } from 'react-router-dom';

// 로그인버튼 기능, 이전페이지 기능

function Certify({ closeCModal }) {
  const [CertifyNum, setCertifyNum] = useState('');
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
    if (isValidNum) {
      //유효한 경우 다음 페이지로 이동하거나 다른 동작 수행
      navigate('/myprofile');
    } else {
      alert('인증번호를 다시 입력해주세요.'); //알림창 푸시
    }
  };

  return (
    // 주황색 화면
    <div className="outer">
      {/* 흰 박스 */}
      <div
        className="inner"
        style={{
          width: '35vw',
          height: '23vh',
          backgroundColor: 'white',
          border: '1px solid #eb7125',
          borderRadius: '20px',
        }}
      >
        <div>
          <div></div>
          <div
            className="buttonbox"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              className="close"
              onClick={closeCModal}
              style={{ marginLeft: '30vw', marginTop: '1vh' }}
            >
              &times;
            </span>
            <h1
              className="Title"
              style={{ fontSize: '25px', textAlign: 'center' }}
            >
              인증번호 입력
            </h1>
            <input
              placeholder="큐피 메일(qp.official.ac@gmail.com)로 받은 인증번호를 입력해주세요."
              style={{
                width: '24vw',
                height: '4vh',
                borderRadius: '20px',
                border: '1px solid gray',
              }}
              id="CertifyNum"
              type="text"
              value={CertifyNum}
              onChange={handleNumChange}
            ></input>
            <div class="help">
              {isValidNum ? (
                <span
                  class="success"
                  style={{
                    color: 'green',
                    fontFamily: 'Pretendard',
                    fontSize: '30px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                ></span> //이 부분은 임의로 작성해둔 것 (메일로 전송받은 인증번호를 어떻게 확인할지에 대해 논의 필요<)
              ) : (
                <span
                  class="fail"
                  style={{
                    position: 'absolute',
                    color: '#F00',
                    fontFamily: 'Pretendard',
                    fontSize: '15px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    top: '64%',
                    left: '15.5%',
                  }}
                >
                  틀린 인증번호 입니다.
                </span>
              )}
            </div>
            <button
              style={{
                width: '5vw',
                height: '3vh',
                marginTop: '4vh',
                borderRadius: '20px',
                backgroundColor: '#eb7125',
                border: 'none',
              }}
              onClick={handleNextButtonClick}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certify;
