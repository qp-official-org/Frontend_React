//프로필설정페이지
//@ts-nocheck
import defaultProfileImg from 'src/basic.svg';
import buttonimg from 'src/button.svg';
import React from "react";
import { useState } from "react";
import { styles } from "src/components/logindetail/style";
import { useNavigate } from "react-router-dom";
import DropMPro from './DropMPro';
import Modal from 'react-modal';

function Profile() {
  const navigate = useNavigate();
  const [IsComplete, setIsComplete] = useState(false);
  const [profileimg, setProfileImg] = useState(defaultProfileImg);
  const [isOpen, setMenu] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    if (IsComplete) {
      setModalIsOpen(true); // 추가
    }
  }

  const handleModalClose = () => {
    setModalIsOpen(false); // 추가
    navigate('/MainPage'); // 추가
  }

  // const handleNextButtonClick = () => {
  //   if (IsComplete) {
  //     //유효한 경우 다음 페이지로 이동
  //     navigate('/MainPage');
  //   }
  // }

  return (
    // 주황색 화면
    <div style={styles.container}>
      {/* 흰 박스 */}
      <div style={styles.whitebox}>
        <div style={styles.buttonBox}>
          <h1 style={styles.pageTitle}>프로필 설정</h1>
          <button onClick={BackBtn} style={styles.previous2}>←</button>
          <div style={styles.setProfile}>
            <img src={profileimg} alt="default .img" style={styles.defaultProfileImg}></img>
            <img src={buttonimg} onClick={() => toggleMenu()} alt="button .img" style={styles.buttonimg}></img>
            {isOpen && <DropMPro onProfileChange={handleProfileChange} />}
          </div>
          <button style={styles.nextButton} onClick={handleNextButtonClick}>설정완료</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleModalClose}
            style={{
              overlay: {
                backgroundColor:"transparent", // overlay 색상 설정
              },
              content: {
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.75)',
                borderRadius:"20px",
                backgroundColor:"#EB7125",
                color:"white",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: "center",
                fontFamily: "Pretendard",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                top: '50%',
                left: '50%',
                right: 'auto',
                transform: 'translate(-50%, -50%)',
                width:"276px",
                height:"362px",
                border:"none"
              },
            }}
          >
            <div>
              <h4 style={{marginTop:"30%", fontSize:"20px"}}>큐피에 오신 것을</h4>
              <span style={{fontFamily: "Pretendard", fontSize: "20px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal"}}>진심으로 환영합니다!</span>
              <button onClick={handleModalClose} style={styles.Qbutton}>질문보러 가기</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Profile;