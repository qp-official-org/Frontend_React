// @ts-nocheck
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { accesstokenState, loginState } from './atom/atoms';
import { userIdState } from './atom/atoms';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import '../src/pstyle.css';
import logo from '../src/components/mprofile/images/apple.png';
import naverlogo from '../src/components/mprofile/images/naverlogo.png';
//import kakaologo from '../src/components/mprofile/images/katalk.png';
import coin from '../src/components/mprofile/images/coin.png';
import gear from '../src/components/mprofile/images/Vector.png';
import badge from '../src/components/mprofile/images/badge.png';
import Header from './Header';
import DropMPro from './DropMPro';
import ProfileQ from './ProfileQ';
import Certify from './CertifyModal';

// accessToken: eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjUyMCwiaWF0IjoxNzA4MjY5ODI4LCJleHAiOjE3MDgyNzcwMjh9.SrKdPOljkWwMdIaLQzBkblMSOqMkqzcSvPmXTssq1g35R39mRPK4SSEg9KRSLO65kNCM-lNWOkBjtL1GWsnTAA
const Myprofile = () => {
  // @ts-nocheck
  const ls = useRecoilValue(loginState)
  const gUserId = useRecoilValue(userIdState);
  const gAccessToken = useRecoilValue(accesstokenState);
  const [userInfo, setUserInfo] = useState([]);
  const [nickname, setNickname] = useState([]);
  const [userId, setuserId] = useState(null);
  const [message, setmessage] = useState(null);
  const [name, setname] = useState(null);
  const [questiontitle, setquestitle] = useState(null);
  const [quesHashs, setquesHash] = useState(null);
  const [isOpen, setMenu] = useState(false);
  const [registerD, setregiD] = useState(null);
  const [myQuestions, setMyQuestions] = useState([]);
  const [alarmQuestions, setAlarmQuestions] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedBox, setClickedBox] = useState(null);
  const [myQ, setMyQ] = useState(true)
  const [buyQ, setBuyQ] = useState(false)
  const [alarmQ, setAlarmQ] = useState(false)
  const [isCModalOpen, setIsCModalOpen] = useState(false);
  // const modalRef = useRef(null);
  console.log(userInfo.createdAt)
  const dateObj = new Date(userInfo.createdAt);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // getMonth는 0부터 시작하므로 1을 더해줍니다.
  const day = dateObj.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일 가입`;
  const handleCreatedAt = () => {
    setregiD(formattedDate)
  }
  useEffect(() => {
    handleCreatedAt()
  }, [userInfo])
  const openCModal = () => {
    setIsCModalOpen(true);
  };

  const closeCModal = () => {
    setIsCModalOpen(false);
  };
  const getUserInfo = async () => {
    try {
      const apiUrl = `http://52.78.248.199:8080/users/${gUserId}`;

      const headers = {
        accessToken: gAccessToken,
      };
      const response = await axios.get(apiUrl, { headers });
      setUserInfo(response.data.result);
      console.log('유저 정보 받아오기(프로필)', response.data);
    } catch (error) {
      console.error('유저 정보 받아오기(프로필)', error);
    }
  };
  useEffect(() => {
    getUserInfo()
  }, [])
  // @ts-ignore
  const clicked = (box) => {
    setIsClicked(true);
    setClickedBox(box);
  };
  const closed = () => {
    setIsClicked(false);
    setboxclicked(false);
    setbox2clicked(false);
  };
  const [Payment, setPayment] = useState('(결제수단 선택)');

  // @ts-ignore
  const paybutton = (method) => {
    setPayment(method);
  };
  //결제창 모달
  const [payclick, ispayclicked] = useState(false);
  const payresume = () => {
    ispayclicked(true);
  };
  const payclose = () => {
    ispayclicked(false);
    setnaver(false);
    setkakao(false);
  };
  // 얼마 충전할것인지 물어보는 창
  const [isboxclicked, setboxclicked] = useState(false);
  const [isbox2clicked, setbox2clicked] = useState(false);
  const [isbox3clicked, setbox3clicked] = useState(false);
  const [isbox4clicked, setbox4clicked] = useState(false);
  const [isbox5clicked, setbox5clicked] = useState(false);
  const box3clicked = () => {
    setbox3clicked(true);
    setbox4clicked(false);
    setbox5clicked(false);
  };
  const box4clicked = () => {
    setbox3clicked(false);
    setbox4clicked(true);
    setbox5clicked(false);
  };
  const box5clicked = () => {
    setbox3clicked(false);
    setbox4clicked(false);
    setbox5clicked(true);
  };
  const boxclicked = () => {
    setboxclicked(true);
    setbox2clicked(false);
  };
  const box2clicked = () => {
    setboxclicked(false);
    setbox2clicked(true);
  };
  // 네이버 카카오 선택하는창
  const [isnaver, setnaver] = useState(false);
  const [iskakao, setkakao] = useState(false);
  const naverclick = () => {
    setnaver(true);
    setkakao(false);
  };
  const kakaoclick = () => {
    setnaver(false);
    setkakao(true);
  };

  const balance = userId;
  const point = balance / 10;

  //프로필 수정버튼
  const [isModifyVisible, setModifyVisible] = useState(true);
  const [isProeditVisible, setProeditVisible] = useState(false);
  const [isEditnoVisible, setEditnoVisible] = useState(false);

  const handleModifyClick = () => {
    setModifyVisible(false);
    setProeditVisible(true);
    setEditnoVisible(true);
  };

  const handleEditnoClick = () => {
    setModifyVisible(true);
    setProeditVisible(false);
    setEditnoVisible(false);
  };

  // 닉네임관련
  const [holder, holdervisible] = useState(false);
  const handleholder = () => {
    holdervisible(true);
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  const [isValidNickname, setIsValidNickname] = useState(false);
  const handleNicknameChange = (event) => {
    const newNickname = event.target.value;
    setNickname(newNickname);
    //여기에서 닉네임 유효성 체크
    const isValid =
      newNickname.length <= 6 &&
      newNickname.length > 0 &&
      /^[a-zA-Z0-9가-힣]*$/g.test(newNickname) &&
      !/\s/g.test(newNickname);

    setIsValidNickname(isValid);
  };
  //닉네임 수정관련
  // 수정된 닉네임을 서버에 전송하는 함수
  const updateNickname = () => {
    // 수정된 닉네임 데이터 생성
    const updatedData = {
      nickname: nickname, // 수정된 닉네임 상태 변수
    };

    // 서버에 PATCH 요청 보내기
    fetch(`http://52.78.248.199:8080/users/538`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        accessToken:
          'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjUzOCwiaWF0IjoxNzA4NDM5NzQxLCJleHAiOjE3MDg0NDY5NDF9.bMUvQM804NFgE7SmpUI8_QSuKKe56Z6OXZ_GqIyHGl-b94D0VmB16hHJfFUmX5rIC9-YuYiT6Ez-Kvqxl8ng-Q',
      },
      body: JSON.stringify(updatedData), // 수정된 데이터를 JSON 형식으로 변환하여 전송
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // 서버 응답 처리
        console.log('Nickname updated successfully:', data);
        // 성공적으로 업데이트되었다는 메시지 또는 다른 처리를 수행할 수 있음
      })
      .catch((error) => {
        // 요청 실패 시 에러 처리
        console.error('Error updating nickname:', error);
      });
  };

  // 수정 버튼 클릭 시 닉네임 업데이트 함수 호출
  const handleNicknameUpdate = () => {
    // 유효한 닉네임인지 확인
    if (isValidNickname) {
      // 업데이트 함수 호출
      updateNickname();
      // 수정 상태 초기화

      setModifyVisible(true);
      setProeditVisible(false);
      setEditnoVisible(false);
      holdervisible(false);
    } else {
      // 유효하지 않은 닉네임인 경우 에러 처리 또는 사용자에게 알림
      console.error('Invalid nickname!');
      // 사용자에게 알림 등의 처리를 수행할 수 있음
    }
  };

  // 프로필사진 선택관련
  const [profileImage, setphoto] = useState(null);
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };
  const [profileimg, setProfileImg] = useState(logo);
  const handleProfileChange = (newProfileImg) => {
    setProfileImg(newProfileImg);
  };
  // 질문 받아내는 곳
  const page = 0;
  const size = 10;
  useEffect(() => {
    fetch(`http://52.78.248.199:8080/questions?page=${page}&size=${size}`, {
      // cache: 'no-store',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((qdata) => {
        const titles = qdata.result.questions.map((question) => question.title);
        const profileImage =
          Array.isArray(qdata.result.questions) &&
            qdata.result.questions.length > 0
            ? qdata.result.questions[0].user.profileImage
            : null;
        setquestitle(titles);
        const quesHash = qdata.result.questions.map(
          (question) => question.hashtags
        );
        setquesHash(quesHash);
        console.log(quesHash);
        setphoto(profileImage);
        console.log(qdata);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  //내가 한 질문 받는 함수
  const getQuestionMe = async () => {
    try {
      const apiUrl = `http://52.78.248.199:8080/questions/user/${gUserId}?page=0&size=3`;
      const headers = {
        accessToken: gAccessToken
      }
      const response = await axios.get(apiUrl, { headers });
      setMyQuestions(response.data.result.questions);
      console.log('내가 한 질문 받기 성공', response);
    } catch (error) {
      console.error('내가 한 질문 받기 실패', error);
    }
  };
  useEffect(() => {
    getQuestionMe()
  }, [])
  //내가 구매한 답변 받는 함수
  const getAlarmQ = async () => {
    try {
      const apiUrl = `http://52.78.248.199:8080/questions/alarms/user/${gUserId}`;
      const response = await axios.get(apiUrl, { content_type: 'application/w-www-form-urlencoded' });
      setAlarmQuestions(response.data.result.questions);
      console.log("구매한 답변", response)
    } catch (error) {
      console.error("구매한답변실패", error)
    }
  }
  const handleMyQ = () => {
    setMyQ(true);
    setAlarmQ(false)
    setBuyQ(false)
  }
  const handleBuyA = () => {
    setMyQ(false);
    setAlarmQ(false)
    setBuyQ(true)
  }
  const handleAlarmQ = () => {
    setMyQ(false);
    setAlarmQ(true)
    setBuyQ(false)
  }
  return (
    <>
      <Header />
      <div className="mainlogo" style={{ marginTop: '4vh' }}></div>
      <div className="wrapper">
        <div className="modalwrap">
          <div className="fixed">
            <div className="box1"></div>
            <div className="box2"></div>
          </div>
          {/* 1번 박스 잔액이랑 답변확인*/}
          <div className="wrap1">
            <div className="first">
              <div className="photo">
                <img
                  className="photo1"
                  style={{ width: '100px', position: 'absolute', height: '100px' }}
                  src={userInfo.profileImage}
                  alt="프사"
                />
                <div className="imagechange">
                  <img
                    className="photo2"
                    style={{
                      width: '30px',
                      position: 'absolute',
                      zIndex: '1',
                      margin: '70px',
                      display: isModifyVisible ? 'none' : 'block',
                    }}
                    onClick={() => {
                      handleModifyClick();
                      toggleMenu();
                    }}
                    src={gear}
                    alt="톱니"
                  />

                  {isOpen && <DropMPro onProfileChange={handleProfileChange} />}
                </div>
                {userInfo.role === 'EXPERT' && (
                  <img
                    className="photo2"
                    style={{
                      width: '30px',
                      position: 'absolute',
                      zIndex: '1',
                      margin: '3px',
                    }}
                    src={badge}
                    alt="뱃지"
                  />
                )}

              </div>
              <div className="data">
                <p
                  style={{
                    fontSize: 'small',
                    color: isModifyVisible
                      ? 'transparent'
                      : isValidNickname
                        ? 'white'
                        : 'red',
                  }}
                  onClick={handleModifyClick}
                >
                  {isValidNickname
                    ? '사용할 수 있는 닉네임입니다'
                    : '사용할 수 없는 닉네임입니다'}
                </p>
                <p
                  style={{
                    display: isModifyVisible ? 'block' : 'none',
                    fontSize: '32px',
                    fontWeight: '900',
                    marginTop: '0px'
                  }}
                >
                  {userInfo.nickname}
                </p>
                <input
                  placeholder={holdervisible ? userInfo.nickname : ''}
                  id="nickname"
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  style={{
                    marginBottom: '1vw',
                    display: isModifyVisible ? 'none' : 'block',
                    height: '5vh',
                    width: '10vw ',
                    fontSize: 'large',
                    fontWeight: 'bold',
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                  }}
                />

                <p className="date">{registerD}</p>
                <div className="innerwrap">
                  <img style={{ width: '45px' }} src={coin} alt="프사" />
                  <p className="balance">{balance}</p>
                  <p style={{ fontWeight: '900' }}>&nbsp;{userInfo.point}POINT&nbsp;&nbsp;|&nbsp;</p>

                  <div className="prof_respond">
                    {userInfo.point}개의 답변을 볼 수 있어요!
                  </div>
                </div>
              </div>

              <div className="modifyunit">
                <button
                  className="modify"
                  style={{ display: isModifyVisible ? 'block' : 'none' }}
                  onClick={handleModifyClick}
                >
                  <span>프로필 수정</span>
                </button>
                <button
                  className="proedit"
                  style={{ display: isProeditVisible ? 'block' : 'none' }}
                  onClick={() => {
                    handleNicknameUpdate();
                    handleRefresh();
                  }}
                >
                  확인
                </button>
                <button
                  className="editno"
                  style={{ display: isEditnoVisible ? 'block' : 'none' }}
                  onClick={handleEditnoClick}
                >
                  취소
                </button>
              </div>
            </div>
            <div
              className="expert"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <p className="exp1" style={{ marginRight: '5px' }}>
                전문가이신가요?
              </p><div style={{ display: 'flex' }}>
                <button
                  style={{
                    textDecoration: 'underline',
                    color: '#eb7125',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '17px',
                  }}
                  onClick={openCModal}
                >
                  전문가 인증하기
                </button>
                {isCModalOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* 모달 */}
                    <div className="modal">
                      <div className="modal-content">
                        <Certify closeCModal={closeCModal} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* 2번 박스*/}
            <div className="wrap2">
              <div className="second">
                <div
                  className="box2_1"
                  style={{
                    backgroundColor: isboxclicked ? '#eb7125' : 'white',
                    color: isboxclicked ? 'white' : 'black',
                  }}
                  onClick={() => {
                    clicked('1000');
                    boxclicked();
                  }}
                >
                  <div className="boxwrap">
                    <img
                      style={{ width: '55px', marginTop: '20px' }}
                      src={coin}
                      alt="동전"
                    />
                    <h3 style={{ marginRight: '17px', marginTop: '20px' }}>
                      1천원 충전하기
                    </h3>
                  </div>
                  <p style={{ fontSize: '13px', textAlign: 'center' }}>
                    1000P가 충전돼요
                    <br />
                    100개의 답변을 확인할 수 있어요
                  </p>
                </div>

                <div
                  className="box2_2"
                  style={{
                    backgroundColor: isbox2clicked ? '#eb7125' : 'white',
                    color: isbox2clicked ? 'white' : 'black',
                  }}
                  onClick={() => {
                    clicked('10000');
                    box2clicked();
                  }}
                >
                  <div className="boxwrap">
                    <img
                      style={{ width: '55px', marginTop: '20px' }}
                      src={coin}
                      alt="동전"
                    />
                    <h3 style={{ marginRight: '17px', marginTop: '20px' }}>
                      1만원 충전하기
                    </h3>
                  </div>
                  <p style={{ fontSize: '13px', textAlign: 'center' }}>
                    10000P가 충전돼요
                    <br />
                    1000개의 답변을 확인할 수 있어요
                  </p>
                </div>
              </div>
            </div>
            {/* 3번 박스 질문,답변 컴포넌트 만들어서 불러올 수 있게 */}
            <div style={{ width: '60vw', marginTop: '3%' }}>
              <div style={{ width: '60vw', display: 'flex', justifyContent: "space-between" }}>
                <div style={{ flex: '1', textAlign: 'center' }}>
                  <button onClick={handleMyQ} style={{ width: '90%', border: '2px solid #D9D9D9', background: 'white', height: '8vh', borderRadius: '20px' }}>내가 한 질문</button>
                </div>
                <div style={{ flex: '1', textAlign: 'center' }}>
                  <button onClick={handleBuyA} style={{ width: '90%', marginLeft: '5%', float: 'center', border: '2px solid #D9D9D9', background: 'white', height: '8vh', borderRadius: '20px' }}>내가 구매한 답변</button>
                </div>
                <div style={{ flex: '1' }}>
                  <button onClick={handleAlarmQ} style={{ width: '90%', float: 'right', border: '2px solid #D9D9D9', background: 'white', height: '8vh', borderRadius: '20px' }}>알림신청한 질문</button>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              {myQ ? (
                myQuestions.map((myQuestion, index) => (
                  <ProfileQ
                    key={index}
                    qId={myQuestion.questionId}
                    title={myQuestion.title}
                    img={myQuestion.user.profileImage}
                    child={myQuestion.childStatus}
                    hashtags={myQuestion.hashtags.map((hashtag) => hashtag.hashtag).join(' #')}
                  />
                ))
              ) : buyQ ? (
                <div style={{ fontSize: '30px', fontWeight: '700', width: '60vw', textAlign: 'center', height: '33vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>구매한 답변이 없습니다</div>
              ) : (
                alarmQ ? (
                  alarmQuestions.length === 0 ? (
                    <div style={{ fontSize: '30px', fontWeight: '700', width: '60vw', textAlign: 'center', height: '33vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>알람 신청한 질문이 없습니다</div>
                  ) : (
                    alarmQuestions.map((alarmQuestion, index) => (
                      <ProfileQ
                        key={index}
                        qId={alarmQuestion.questionId}
                        title={alarmQuestion.title}
                        img={alarmQuestion.user.profileImage}
                        child={alarmQuestion.childStatus}
                        hashtags={alarmQuestion.hashtags.map((hashtag) => hashtag.hashtag).join(' #')}
                      />
                    ))
                  )
                ) : null
              )}


            </div>

            {/* 4번 박스 */}

          </div>
          <div
            // 클릭했을때 뜨는 결제창
            className="modalp"
            style={{ display: isClicked ? 'block' : 'none' }}
          >
            <div className="buttonwrap_parent">
              <div className="buttonwrap">
                <button
                  className="naver"
                  style={{ backgroundColor: isnaver ? '#eb7125' : 'white' }}
                  onClick={() => {
                    paybutton('네이버페이');
                    payresume();
                    naverclick();
                  }}
                >
                  <img
                    style={{ width: '1.6vw', marginLeft: '0.5vw' }}
                    src={naverlogo}
                    alt="네이버로고"
                  />
                  <p
                    style={{
                      fontSize: 'large',
                      fontWeight: '500',
                      marginLeft: '1vw',
                    }}
                  >
                    네이버
                  </p>
                </button>
                <button
                  className="kakao"
                  style={{ backgroundColor: iskakao ? '#eb7125' : 'white' }}
                  onClick={() => {
                    paybutton('카카오페이');
                    payresume();
                    kakaoclick();
                  }}
                >
                  <img
                    style={{ width: '30px', marginLeft: '4px' }}
                    src={{/*kakaologo*/ }}
                    alt="카카오로고"
                  />
                  <p
                    style={{
                      fontSize: 'large',
                      fontWeight: '500',
                      marginLeft: '1vw',
                    }}
                  >
                    카카오
                  </p>
                </button>
              </div>
            </div>
            <div
              className="payarea"
              style={{ display: payclick ? 'flex' : 'none' }}
            >
              <div className="paypage">
                <p style={{ textAlign: 'center', fontSize: 'larger' }}>
                  선택하신 금액 '{clickedBox}'원을 <br /> '{Payment}'로 <br />
                  충전하시겠습니까?
                </p>
                <div className="paybutton">
                  <button className="payyes">네</button>
                  <button className="payno" onClick={closed}>
                    아니요
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Myprofile;