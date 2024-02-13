import { atom, useRecoilState } from 'recoil';

export const userIdState = atom({
    key: 'userIdState',
    default: '1',
});

export const accesstoken = atom({
    key: 'accesstoken',
    default: "tb_UinyQMdGZU6ybPuNgHta5vRxyn3TQQdAKKiUPAAABjaKSJuFHueF-5ScOZw",
});