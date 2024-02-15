import { atom, useRecoilState } from 'recoil';

export const userIdState = atom({
    key: 'userIdState',
    default: null,
});

export const accesstokenState = atom({
    key: 'accesstoken',
    default: null
});
// 1에 "tb_UinyQMdGZU6ybPuNgHta5vRxyn3TQQdAKKiUPAAABjaKSJuFHueF-5ScOZw"