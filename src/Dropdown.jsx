//@ts-nocheck
import React from "react";
import { styles } from "src/components/logindetail/style";

function Dropdown() {
    return(
        <div style={styles.toggle}>
            <div>
                <div style={{marginTop: "15px", textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <li style={{color: "#000", fontFamily: "Pretendard",fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal"}}>기본프로필</li>
                    <li style={{marginTop:"20px", color: "#000", fontFamily: "Pretendard",fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal"}}>사진보관함</li>
                </div>
            </div>
        </div>
    );
}
export default Dropdown;