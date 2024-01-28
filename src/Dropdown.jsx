//@ts-nocheck
import React from "react";
import defaultProfileImg from 'src/basic.svg';
import otherProfileImg from 'src/example.svg'; //사진보관함에서 선택한 다른 사진들 불러오기 (임의로 other이라고 지정해둠)
import { styles } from "src/components/logindetail/style";
import { useState } from "react";

function Dropdown({onProfileChange}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <div style={styles.toggle}>
            <div>
                <div style={{marginTop: "15px", textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <li style={{color: "#000", fontFamily: "Pretendard",fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", cursor: 'pointer'}} 
                    onClick={()=>onProfileChange(defaultProfileImg)}
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