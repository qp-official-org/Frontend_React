//@ts-nocheck
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import querystring from 'querystring';


function Auth() {
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

useEffect(() => {
    // Query String Parsing
    let href = window.location.href;
    // Parsing Query String
    let queryString = href.substring(href.indexOf("?") + 1);
    // Parsing Query String to Object
    let queryObj = {};

    // Split by "&"
    queryString.split("&").forEach((value) => {
        let key = value.split("=")[0];
        let val = value.split("=")[1];
        queryObj[key] = val;
    });

    let kakaoCode = queryObj["code"];

    // 현재 페이지의 URL을 가져온다.

    let data = {
        "grant_type" : "authorization_code",
        "client_id" : "9c0435350e0714d02ef07e6bccb168ab",
        "redirect_uri" : "http://15.164.53.109:3000/KakaoLogin/auth.html",
        "code" : kakaoCode,
    };

    console.log(data);
    axios.post("https://kauth.kakao.com/oauth/token", data,{
        headers : {
            "Content-type" : "application/x-www-form-urlencoded"
        }
    })
        .then((res) => {
            console.log(res.data);
            axios.get(`http://52.78.248.199:8080/users/sign_up?accessToken=${res.data.access_token}`);
            setCode(res.data);
    }).catch((err) => {
        console.log(err);
    });
}, []);

return (
    <div>
        <h1>AuthPage</h1>
        {JSON.stringify(code)}
    </div>
);
}

// useEffect(  async () => {
//     const location = window.location;

//     const params = new URLSearchParams(location.search);

//     let code = params.get("code");

//     let data = {
//         "grant_type" : "authorization_code",
//         "client_id" : "9c0435350e0714d02ef07e6bccb168ab",
//         code,
//     };

//     console.log(data);
//     let response = await axios.post("https://kauth.kakao.com/oauth/token", data, {
//         headers: {
//             "Content-type": "application/x-www-form-urlencoded"
//         }
//     });

//     console.log(response.data);

// }, []);

export default Auth;
