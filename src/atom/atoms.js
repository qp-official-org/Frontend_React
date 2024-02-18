import { atom, useRecoilState } from 'recoil';
const ls = localStorage.getItem('isLoggedIn')
const us = localStorage.getItem('userId')
const ats = localStorage.getItem('accesstoken')
export const userIdState = atom({
    key: 'userIdState',
    default: us,
});

export const accesstokenState = atom({
    key: 'accesstoken',
    default: ats
});

export const loginState = atom({
    key: "login",
    default: ls
})
// 6에 "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjYsImlhdCI6MTcwODA2ODM5MiwiZXhwIjoxNzA4MDc1NTkyfQ._s7Vqi7S56qLWIrZIkj95Glpu_in8MncWJTBmBbhh5niQn5zF_tvYp6T_wPXZpUclQ1hgnXK4CThKWoRpAY5Tw"