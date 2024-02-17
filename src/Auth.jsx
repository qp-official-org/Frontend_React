//@ts-nocheck
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Auth() {
const [code, setCode] = useState({})

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

    let data = {
        "grant_type" : "authorization_code",
        "client_id" : "1d5868c6919c5a981e66913f02262514",
        "redirect_uri" : "http://localhost:3000/auth/kakao/login",
        "code" : kakaoCode,
    };

    console.log(data);
    axios.post("https://kauth.kakao.com/oauth/token", data,{
        headers : {
            "Content-type" : "application/x-www-form-urlencoded"
        }
    })
    // .then(console.log("3")) 테스트 
    .then((res) => {
        console.log(res.data);
				// 여기에 회원가입 요청 API 호출!
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
// const [code, setCode] = useState({})
// const navigate = useNavigate();

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

//     console.log(data);
//     axios.post("https://kauth.kakao.com/oauth/token", data,{
//         headers : {
//             "Content-type" : "application/x-www-form-urlencoded"
//         }
//     })
//     .then((res) => {
//         console.log(res.data);
//         setCode(res.data);
//         // 회원가입 API 호출
//         return axios.get(`http://52.78.248.199:8080/users/sign_up?accessToken${res.data.access_token}`);
//     })
//     .then((res) => {
//         // 회원가입 응답을 받아 사용자 ID 저장
//         const userId = res.data.result.userId;
//         // 유저 정보 조회 API 호출
//         return axios.get(`http://52.78.248.199:8080/users/${userId}`, { headers: { "Authorization": `Bearer ${res.data.access_token}` }});
//     })
//     .then((res) => {
//         // 유저 정보 조회 응답을 받아 사용자의 닉네임 확인
//         if (!res.data.result.nickname) {
//             // 닉네임이 없는 사용자라면 닉네임 설정 페이지로 이동
//             navigate('/Nickname');
//         } else {
//             // 닉네임이 있는 사용자라면 메인 페이지로 이동
//             navigate('/Main');
//         }
//     })
//     .catch((err) => {
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

export default Auth;
