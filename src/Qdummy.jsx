//@ts-nocheck
import React from "react";
import { useState } from "react";
import { styles } from "src/components/MainPageDetail/style";
import answericon from 'src/default.svg';
import panswericon from 'src/professor.svg';

function Qdummy({title, answerCount, expertCount, createdAt, hashtag, user, childStatus, profileImg }) {
    const [isHovered, setIsHovered] = useState(false);
    const childTag = childStatus === 'ACTIVE' ? '어린이' : '어른이';
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
  
      const handleMouseLeave = () => {
          setIsHovered(false);
      };
    const defaultQdummy = { 
        color:"black",
        fontFamily: "Pretendard",
        fontStyle: "normal",
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
                        <div style={styles.contents}>
                            <img src={ profileImg } style={styles.profile}></img>
                            <div class="level" style={{fontSize:"16px", marginTop:"28px", marginLeft:"200px"}}>
                                {/* <h5>어린이</h5> */}
                                {childTag}
                            </div>
                            <div class="date" style={{fontSize:"13px", marginTop:"62px"}}>
                                {/* <h5>2023. 12. 20. 8:00am</h5> */}
                                {createdAt}
                            </div>
                            <div class="title" style={{fontSize:"20px", fontWeight:700, marginTop:"10px"}}>
                                {/* <p>현재 아르테미스 계획은</p>
                                <p>어떻게 되어 가고 있나요?</p> */}
                                {title}
                            </div>
                            <div class="reply" style={styles.answer}>
                                <img src={answericon}></img>
                                <span style={{marginLeft:"8px"}}>   </span>
                                {answerCount}
                                <img src={panswericon} style={{marginLeft:"8px"}}></img>
                                <span style={{marginLeft:"8px"}}>   </span>
                                {expertCount}
                            </div>
                            <div class="tag" style={{fontSize:"15px", marginTop:"24%"}}>
                                {/* <span>#해시태그</span>
                                <span style={{marginLeft:"17px"}}>#해시태그</span>
                                <span style={{marginLeft:"17px"}}>#해시태그</span> */}
                                <span>#</span>{hashtag}
                            </div>
                        </div>
                    </div>
                ):(
                    <div style={defaultQdummy}>
                        <div style={styles.contents}>
                            <img src={ profileImg } style={styles.profile}></img>
                            <div class="level" style={{fontSize:"16px", marginTop:"28px", marginLeft:"200px", color:"#EB7125"}}>
                                {/* <h5>어린이</h5> */}
                                {childTag}
                            </div>
                            <div class="date" style={{fontSize:"13px", marginTop:"62px"}}>
                                {/* <h5>2023. 12. 20. 8:00am</h5> */}
                                {createdAt}
                            </div>
                            <div class="title" style={{fontSize:"20px", fontWeight:700, marginTop:"10px"}}>
                                {/* <p>현재 아르테미스 계획은</p>
                                <p>어떻게 되어 가고 있나요?</p> */}
                                {title}
                            </div>
                            {/* <div class="reply" style={styles.answer}>
                                <img src={answericon}></img>
                                <span style={{marginLeft:"8px"}}>2</span>
                                <img src={panswericon} style={{marginLeft:"8px"}}></img>
                                <span style={{marginLeft:"8px"}}>3</span>
                            </div> */}
                            <div class="tag" style={{fontSize:"15px", marginTop:"60%"}}>
                                {/* <span>#해시태그</span>
                                <span style={{marginLeft:"17px"}}>#해시태그</span>
                                <span style={{marginLeft:"17px"}}>#해시태그</span> */}
                                <span>#</span>{hashtag}
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}
export default Qdummy;