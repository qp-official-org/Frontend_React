//@ts-nocheck
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Auth() {
const navigate = useNavigate();
const [code, setCode] = useState({})

// useEffect(() => {
//     // Query String Parsing
//     let href = window.location.href;
//     // Parsing Query String
//     let queryString = href.substring(href.indexOf("?") + 1);
//     // Parsing Query String to Object
//     let queryObj = {};

//     // Split by "&"
//     queryString.split("&").forEach((value) => {
//         let key = value.split("=")[0];
//         let val = value.split("=")[1];
//         queryObj[key] = val;
//     });

//     let kakaoCode = queryObj["code"];

//     let data = {
//         "grant_type" : "authorization_code",
//         "client_id" : "1d5868c6919c5a981e66913f02262514",
//         "redirect_uri" : "http://localhost:3000/auth/kakao/login",
//         "code" : kakaoCode,
//     };

//     console.log("1",data);
//     // 쿼리스트링으로 데이터 넘기기 시도
//     axios.post(`https://kauth.kakao.com/oauth/token`, querystring.stringify(data),{
//         headers : {
//             "Content-type" : "application/x-www-form-urlencoded"
//         }
//     })
//     // .then(console.log("3")) 테스트
//     .then((res) => {
//         console.log(res.data);
// 		// 여기에 회원가입 요청 API 호출!
//         axios.get(`http://52.78.248.199:8080/users/sign_up?accessToken=${res.data.access_token}`);
//         setCode(res.data);
//     }).catch((err) => {
//         console.log(err);
//     });
// }, []);
// return (
//     <div>
//         <h1>AuthPage</h1>
//         {JSON.stringify(code)}
//     </div>
// );
// }
const signUp = async () => {
    const location = window.location;

    const params = new URLSearchParams(location.search);

    let kakaoCode = params.get("code");

    let data = {
        "grant_type": "authorization_code",
        "client_id": "9c0435350e0714d02ef07e6bccb168ab",
        code: kakaoCode,
    };

    let response = await axios.post("https://kauth.kakao.com/oauth/token", data, {
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    });

    let ret = await axios.get(`http://52.78.248.199:8080/users/sign_up?accessToken=${response.data.access_token}`);
    console.log(ret);
    console.log(ret.data.result.accessToken);
    let {isSuccess, result} = ret.data;
    let {isNew} = result;
    if (isSuccess) {
        if (isNew) {
            localStorage.setItem('accesstoken', ret.data.result.accessToken);
            localStorage.setItem('userId', ret.data.result.userId);
            // 프로필 수정 페이지로 이동
            navigate("/nickname");
        }
        // 여기에 userId, accessToken, refreshToken을 저장하는 코드를 작성해야 함 (recoil 사용하는 것으로 알고있음)
        // dispatch({type: INIT_USER, ...result});
    } else {
        console.log("Login Failed");
    }
    localStorage.setItem('accesstoken', ret.data.result.accessToken);
    localStorage.setItem('userId', ret.data.result.userId);
    navigate("/mainpage");
}

useEffect( ()=>{
    signUp()
}, []);
};

export default Auth;
