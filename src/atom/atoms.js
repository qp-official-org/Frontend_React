import { atom, useRecoilState } from 'recoil';

export const userIdState = atom({
    key: 'userIdState',
    default: null,
});

export const accesstokenState = atom({
    key: 'accesstoken',
    default: null
});
// 6에 "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjYsImlhdCI6MTcwODA2ODM5MiwiZXhwIjoxNzA4MDc1NTkyfQ._s7Vqi7S56qLWIrZIkj95Glpu_in8MncWJTBmBbhh5niQn5zF_tvYp6T_wPXZpUclQ1hgnXK4CThKWoRpAY5Tw"