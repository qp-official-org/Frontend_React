// @ts-nocheck
import { useRecoilValue } from 'recoil';
import { accesstokenState } from './atom/atoms';
import { userIdState } from './atom/atoms';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { Link } from 'react-router-dom';
import '../src/pstyle.css';
import logo from '../src/components/mprofile/images/apple.png';
import naverlogo from '../src/components/mprofile/images/naverlogo.png';
import kakaologo from '../src/components/mprofile/images/kakao.png';
import coin from '../src/components/mprofile/images/coin.png';
import gear from '../src/components/mprofile/images/Vector.png';
import Header from './Header';
import DropMPro from './DropMPro';
// accessToken: eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjUyMCwiaWF0IjoxNzA4MjY5ODI4LCJleHAiOjE3MDgyNzcwMjh9.SrKdPOljkWwMdIaLQzBkblMSOqMkqzcSvPmXTssq1g35R39mRPK4SSEg9KRSLO65kNCM-lNWOkBjtL1GWsnTAA
const Myprofile = () => {
  // @ts-nocheck

  const gUserId = useRecoilValue(userIdState);
  const gAccessToken = useRecoilValue(accesstokenState);
  const [userInfo, setUserInfo] = useState([]);
  const getUserInfo = async () => {
    try {
      const apiUrl = `http://52.78.248.199:8080/users/${gUserId}`;

      const headers = {
        accessToken: gAccessToken,
      };
      const response = await axios.get(apiUrl, { headers });
      setUserInfo(response.data.result);
      console.log('Get 요청 성공:', response.data);
    } catch (error) {
      console.error('Get 요청 실패:', error);
    }
  };
  const [nickname, setNickname] = useState([]);
  const [userId, setuserId] = useState(null);
  const [message, setmessage] = useState(null);
  const [name, setname] = useState(null);
  const [questiontitle, setquestitle] = useState(null);
  const [quesHashs, setquesHash] = useState(null);
  const [isOpen, setMenu] = useState(false);
  const [registerD, setregiD] = useState(null);

  const [isClicked, setIsClicked] = useState(false);
  const [clickedBox, setClickedBox] = useState(null);

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
    fetch(`http://52.78.248.199:8080/users/520`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        accessToken:
          'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjUyMCwiaWF0IjoxNzA4MzI2Mzc5LCJleHAiOjE3MDgzMzM1Nzl9.q4AIfXx9vSvOY7-KVgxuRlPCBmOR2PEYDVueZtuYpJEEaXekVVjWxhd1scUOGAJ30IAzT9NU0uvbJXFJhy2i9A',
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
  //test user 생성 API연결 코드
  useEffect(() => {
    // fetch 요청
    fetch(`http://52.78.248.199:8080/users/520`, {
      method: 'GET',
      headers: {
        accessToken:
          'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjUyMCwiaWF0IjoxNzA4MzI2Mzc5LCJleHAiOjE3MDgzMzM1Nzl9.q4AIfXx9vSvOY7-KVgxuRlPCBmOR2PEYDVueZtuYpJEEaXekVVjWxhd1scUOGAJ30IAzT9NU0uvbJXFJhy2i9A',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.result && data.result.nickname) {
          const username = data.result.nickname;
          setname(username);
          const registerDay = data.result.createdAt;
          const dateObject = new Date(registerDay);
          const formattedDate = `${dateObject.getFullYear()}-${(
            dateObject.getMonth() + 1
          )
            .toString()
            .padStart(2, '0')}-${dateObject
            .getDate()
            .toString()
            .padStart(2, '0')}`;
          console.log(data);
          console.log(formattedDate);
          setregiD(formattedDate);
        } else {
          console.error('Error fetching user data: Invalid response format');
        }
      })
      .catch((error) => {
        // 요청 실패 시 에러 처리
        console.error('Error fetching user data:', error);
      });
  }, []);

  // 질문 받아내는 곳
  const page = 1;
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
                  style={{ width: '100px', position: 'absolute' }}
                  src={profileImage}
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
              </div>
              <div className="data">
                <p
                  style={{
                    fontSize: 'small',
                    color: isModifyVisible
                      ? 'transparent'
                      : isValidNickname
                      ? 'black'
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
                    fontSize: 'large',
                    fontWeight: 'bold',
                  }}
                >
                  {userInfo.nickname}
                  {/* {name} */}
                </p>
                <input
                  placeholder={holdervisible ? name : ''}
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

                <p className="date">{registerD}가입</p>
                <div className="innerwrap">
                  <img style={{ width: '80px' }} src={coin} alt="프사" />
                  <p className="balance">{balance}</p>
                  <p>&nbsp;POINT&nbsp;&nbsp;|&nbsp;</p>

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
            {/* 2번 박스*/}
            <div className="wrap2">
              <div className="second">
                <div
                  className="box2_1"
                  style={{
                    backgroundColor: isboxclicked ? '#eb7125' : 'white',
                  }}
                  onClick={() => {
                    clicked('1000');
                    boxclicked();
                  }}
                >
                  <div className="boxwrap">
                    <img style={{ width: '55px' }} src={coin} alt="동전" />
                    <h3>1천원 충전하기</h3>
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
                  }}
                  onClick={() => {
                    clicked('10000');
                    box2clicked();
                  }}
                >
                  <div className="boxwrap">
                    <img style={{ width: '55px' }} src={coin} alt="동전" />
                    <h3>1만원 충전하기</h3>
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
            <div className="wrap3">
              <div className="third">
                {/* 박스 use state onclick -> 아래가 바뀌게  */}
                <div className="box3_1">내가 한 질문</div>
                <div className="box3_2">내가 구매한 답변</div>
                <div className="box3_3">알림 신청한 질문</div>
              </div>
            </div>
            {/* 4번 박스 */}
            <div className="wrap3">
              <div className="fourth">
                <div className="box4_1">
                  <div className="otherprofile">
                    <img
                      style={{ width: '70px' }}
                      src={profileImage}
                      alt="프사"
                    />
                  </div>
                  {Array.isArray(questiontitle) && questiontitle.length > 0 && (
                    <p className="temp">{questiontitle[0]}</p>
                  )}

                  {Array.isArray(quesHashs) && quesHashs.length > 0 && (
                    <div className="qhashtags">
                      {quesHashs[0].map((hashTag, index) => (
                        <p key={index}>#{hashTag.hashtag}</p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="box4_2">
                  <div className="otherprofile">
                    <img
                      style={{ width: '70px' }}
                      src={profileImage}
                      alt="프사"
                    />

                    {Array.isArray(questiontitle) &&
                      questiontitle.length > 0 && (
                        <p className="temp">{questiontitle[1]}</p>
                      )}
                    {Array.isArray(quesHashs) && quesHashs.length > 0 && (
                      <div className="qhashtags">
                        {quesHashs[1].map((hashTag, index) => (
                          <p key={index}>#{hashTag.hashtag}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="box4_3">
                  <div className="otherprofile">
                    <img
                      style={{ width: '70px' }}
                      src={profileImage}
                      alt="프사"
                    />
                    {Array.isArray(questiontitle) &&
                      questiontitle.length > 0 && (
                        <p className="temp">{questiontitle[2]}</p>
                      )}
                    {Array.isArray(quesHashs) && quesHashs.length > 0 && (
                      <div className="qhashtags">
                        {quesHashs[2].map((hashTag, index) => (
                          <p key={index}>#{hashTag.hashtag}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
                    style={{ width: '3vw' }}
                    src={kakaologo}
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
              <button className="closemodal" onClick={closed}>
                X
              </button>
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
                  <button className="payno" onClick={payclose}>
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
