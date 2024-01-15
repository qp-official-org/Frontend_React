import React from "react";
import { styles } from "./qdetail/style";
import { useState } from "react";

function Dropdown() {
    const [view, setView] = useState(false);

    return (
        <div>
            <ul onClick={() => { setView(!view) }} style={styles.dropdownbtn}>⋮
                {view && (
                    <div style={{ background: 'white', border: '1px solid #000' }}>
                        <li style={{ order: '-1', height: '25px', width: "100px" }}>수정하기</li>
                        <li style={{ order: '-1', height: '25px', width: "100px" }}>신고하기</li>
                    </div>
                )}
            </ul>
        </div>
    )
};
export default Dropdown;