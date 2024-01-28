//@ts-nocheck
import React from "react";
import { styles } from "src/components/logindetail/style";

function Dropdown() {
    return(
        <div style={styles.toggle}>
            <div style={styles.toggleBox}>
                <div style={{marginTop: "15px", textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <li>기본프로필</li>
                    <li style={{marginTop:"20px"}}>사진보관함</li>
                </div>
            </div>
        </div>
    );
}
export default Dropdown;