// @ts-nocheck
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ProfileQ({ title, img, hashtags, child, qId }) {
    const navigate = useNavigate();
    const goQ = () => {
        navigate(`/detail/${qId}`);
    };
    return (
        <div onClick={goQ} style={{ width: '19.19vw', display: 'flex', justifyContent: 'space-between', marginLeft: '1%', marginRight: '1%' }}>
            <div style={{ width: '19.19vw', height: '34vh', margin: '3%', marginLeft: '2%', border: '2px solid #D9D9D9', background: 'white', borderRadius: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={img} style={{ width: '5vw', margin: '2%' }} />
                    <div style={{ float: 'right', margin: '6%' }}>{(child == "ACTIVE") ? "어린이" : ""}</div>
                </div>
                <div style={{ fontSize: '20px', fontWeight: '700', margin: '5%', height: '40%' }}>
                    {title}
                </div>
                <div style={{ margin: '3%' }}>
                    {hashtags.length === 0 ? <span>{hashtags}</span> : <span>#{hashtags}</span>}</div>
            </div>
        </div >)
}
export default ProfileQ;