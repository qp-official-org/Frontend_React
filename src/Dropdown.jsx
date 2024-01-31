//@ts-nocheck
import profile1 from 'src/p1.svg';
import profile2 from 'src/p2.svg';
import profile3 from 'src/p3.svg';
import profile4 from 'src/p4.svg';
import profile5 from 'src/p5.svg';
import profile6 from 'src/p6.svg';
import React from "react";
import defaultProfileImg from 'src/basic.svg';
import otherProfileImg from 'src/example.svg'; //사진보관함에서 선택한 다른 사진들 불러오기 (임의로 other이라고 지정해둠)
import { styles } from "src/components/logindetail/style";
import { useState } from "react";

function Dropdown({onProfileChange}) {
    const [imgitems, setImgItems] = useState([profile1,profile2,profile3,profile4,profile5,profile6]); //기본 프로필 이미지 배열
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleDefaultProfileClick = () => {
        const randomIndex = Math.floor(Math.random() * imgitems.length);
        const newProfileImg = imgitems[randomIndex];
        onProfileChange(newProfileImg);
    };

    return(
        <div style={styles.toggle}>
            <div>
                <div style={{marginTop: "15px", textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <li style={{color: "#000", fontFamily: "Pretendard",fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", cursor: 'pointer'}} 
                    // onClick={()=>onProfileChange(defaultProfileImg)} //화면 설계서 속 기본 프로필
                    onClick={handleDefaultProfileClick} //메인 화면 속 기본 프로필
                    onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseLeave}>기본프로필</li>
                    <li style={{marginTop:"20px", color: "#000", fontFamily: "Pretendard",fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", cursor: 'pointer'}}
                    onClick={()=>onProfileChange(otherProfileImg)}
                    onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseLeave}
                    >사진보관함</li>
                </div>
            </div>
        </div>
    );
}
export default Dropdown;