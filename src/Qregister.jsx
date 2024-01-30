// @ts-nocheck
import React from "react";
import Header from "./Header";
import { styles } from "./components/registerq/style";
import { useState } from "react";
import Hashtag from "./components/registerq/Hashtag";

function Qregister() {
    const [warnCheck, setWarnCheck] = useState(false);
    const [writeTag, setWriteTag] = useState("햄버거");
    return (<div>
        <Header />
        <div style={{ justifyContent: 'center', display: 'flex', }}>
            <div style={{}}>
                <div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>제목</div>
                    <textarea style={{ width: "48.3vw", height: '8.739vh', borderRadius: '20px', border: '3px solid #D9D9D9' }}></textarea>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div></div>
                        <div style={{ textAlign: 'right', fontSize: '10px', fontWeight: '400' }}>
                            <div>최소 5자</div>
                            <div>최대 60자</div>
                            <div>?(물음표)로 끝내기</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>본문</div>
                    <textarea style={{ width: "48.3vw", height: '16.5vh', borderRadius: '20px', border: '3px solid #D9D9D9' }}></textarea>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div></div>
                        <div style={{ textAlign: 'right', fontSize: '10px', fontWeight: '400' }}>
                            <div>최소 10자</div>
                            <div>최대 300자</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>해시태그(최대3개)</div>
                    <input style={{ width: "14.5138vw", border: 'none', borderBottom: '2px solid black' }} />
                    <Hashtag />
                </div>
                <div style={{ width: '21.527vw', height: '15.3567vh', marginTop: '5%' }}>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>난이도</div>
                    <div style={{ marginTop: '2%' }}>
                        <div style={{ width: '21.527vw', justifyContent: 'space-between', display: 'flex' }}>
                            <button style={{ width: '9.916vw', height: '4.88vh', borderRadius: '20px', border: '3px solid #EB7125', background: '#EB7125', fontWeight: '700', fontSize: '20px', color: 'white' }}>어린이</button>

                            <button style={{ width: '9.916vw', height: '4.88vh', borderRadius: '20px', border: '3px solid #D9D9D9', fontWeight: '700', fontSize: '20px', }}>성인</button>
                        </div>
                        <div style={{ background: '#EB7125', height: '0px', width: '0px', borderRight: '10px solid #FFFFFF', borderLeft: '10px solid #FFFFFF', borderBottom: '10px solid #EB7125', borderTop: '10px solid #FFFFFF', marginLeft: '10%', marginTop: '2%' }}></div>
                        <div style={{ width: "19.2361vw", height: '5.85vh', borderRadius: '20px', border: '3px solid #EB7125', fontWeight: '700', fontSize: '15px', background: '#EB7125', display: 'flex', justifyContent: 'center' }}>

                            <div style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: '400', padding: '10px', }}>
                                '어린이'를 활성시키면<br />
                                어린이 수준에 맞는 답변을 해줍니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '20px', fontWeight: '700', marginTop: '6%' }}>질문 등록 시 유의사항(필수)</div>
                    <div style={{ width: "48.3vw", height: '15.234vh', borderRadius: '20px', border: '3px solid #D9D9D9', fontWeight: '700', fontSize: '15px', justifyContent: 'space-around' }}>
                        <div>작성자님께서 궁금해하고 등록한 질문은 다른 사람들도 궁금해할 만한 질문들입니다.</div>

                        <div>질문에 대한 답변을 구매하는 형식이기에 한 사람이라도 답변을 구매한다면 질문을 수정하거나 삭제할 수 없습니다.</div>

                        <div>이와 같은 이유로 작성하실 때 신중히 작성해주세요.</div></div><button>유의사항 체크</button></div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button style={{ borderRadius: '20px', width: '13.68vw', height: '4.8828vh', border: '3px solid #D9D9D9', background: '#FFFFFF' }}>등록</button>
                </div>
            </div>
        </div>
    </div >)
}

export default Qregister;