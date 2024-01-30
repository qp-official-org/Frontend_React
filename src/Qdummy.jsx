//@ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/MainPageDetail/style";
import answericon from 'src/default.svg';
import panswericon from 'src/professor.svg';

function Qdummy({ profileImg }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
  
      const handleMouseLeave = () => {
          setIsHovered(false);
      };

    const defaultQdummy = { 
        color:"black",
        width:"276.421px",
        height: "355px",
        borderRadius: "20px",
        border: "3px solid #D9D9D9",
        background: "#FFF"
    };

    const hoverQdummy = {
        cursor:"pointer",
        color: "#FFF",
        fontFamily: "Pretendard",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
        width:"276.421px",
        height: "355px",
        borderRadius: "20px",
        border: "3px solid #EB7125",
        background: "linear-gradient(151deg, #EB7125 0%, #CB4E00 106.87%)",
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25), 0px 2px 6px 0px rgba(0, 0, 0, 0.25) inset"
    };
    
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <div class="help">
                {isHovered ? (
                    <div style={hoverQdummy}>
                        <img src={ profileImg } style={styles.profile}></img>
                        <h5>어린이</h5>
                        <h5>업로드 시간</h5>
                        <h1>제목</h1>
                        <div style={styles.answer}>
                            <img src={answericon}></img>
                            <span>2</span>
                            <img src={panswericon}></img>
                            <span>3</span>
                        </div>
                        <div>
                            <h5>해시태그 </h5>
                        </div>
                    </div>
                ):(
                    <div style={defaultQdummy}>
                        <img src={ profileImg } style={styles.profile}></img>
                        <h5 style={{color:"#EB7125"}}>어린이</h5>
                        <h5>업로드 시간</h5>
                        <h1>제목</h1>
                        <div style={styles.answer}>
                        {/* 호버가 아닐 때 기본 상태에서는 댓글을 안띄워두나? */}
                            {/* <img src={answericon}></img>
                            <span>2</span>
                            <img src={panswericon}></img>
                            <span>3</span> */} 
                        </div>
                        <div>
                            <h5>해시태그 </h5>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}
export default Qdummy;