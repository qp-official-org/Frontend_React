// @ts-nocheck
import React from "react";
import Header from "./Header";
import { styles } from "./components/registerq/style";

function Qregister() {
    return (<div>
        <Header />
        <div style={{ justifyContent: 'center', display: 'flex' }}>
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
                    <input placeholder="태그입력카" style={{ width: "14.5138vw", }} />
                    <div>입력한 태그들</div>
                </div>
                <div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>난이도</div>
                    <button>성인</button>
                    <button>어린이</button>
                </div>
                <div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>질문 등록 시 유의사항(필수)</div>
                    <div style={{ width: "48.3vw", height: '15.234vh', borderRadius: '20px', border: '3px solid #D9D9D9' }}>
                        작성자님께서 궁금해하고 등록한 질문은 다른 사람들도 궁금해할 만한 질문들입니다.


                        질문에 대한 답변을 구매하는 형식이기에 한 사람이라도 답변을 구매한다면 질문을 수정하거나 삭제할 수 없습니다.

                        이와 같은 이유로 작성하실 때 신중히 작성해주세요.</div><button>유의사항 체크</button></div>
                <button>등록</button>
            </div>
        </div>
    </div>)
}

export default Qregister;