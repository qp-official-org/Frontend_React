import { useState } from "react";

function Qdetail() {
    const [login, setLogin] = useState(false);


    return (
        <div style={styles.container}>
            <div style={styles.q_a_sub}>
                <div style={styles.q_container}>
                    <div>돋보기 사진이 들어갈 자리</div>
                    <div>궁금한 것을 질문해보세요</div>
                </div>
                <h2 style={styles.ad}>광고/배너</h2>


            </div>
            <div style={styles.ad_q}>
                <div style={styles.a_b_q_container}>
                    <div style={styles.b_q_container}>이전 질문으로 이동 칸</div>{/*Link 컴포넌트로 바꿀 태그*/}
                    <div style={styles.a_q_contianer}>다음 질문으로 이동 칸</div>{/*Link 컴포넌트로 바꿀 태그*/}
                </div>
                <div style={styles.q_a_main}>
                    질문과 대답이 나오는 칸
                </div>
            </div>
            <div style={styles.profilecontainer}>
                <div style={styles.profilecontainer2}>로그인
                </div>
            </div>
        </div>
    )
}
export default Qdetail;

const styles = {
    container: {
        display: 'flex'
    },
    q_a_sub: {
        flex: '1',
        display: 'inline',
    },
    ad_q: {
        flex: '3',
        display: 'inline',
        margin: '2%'
    },
    a_b_q_container: {
        display: "flex",
        justifyContent: "space-between",
    },
    b_q_container: {
        marginTop: '5px',
        marginBottom: '10px',
        marginleft: '5px'
    },
    a_q_contianer: {
        marginTop: '5px',
        marginBottom: '10px',
        marginleft: '5px'
    },
    q_container: {
        borderRadius: '15px',
        width: '20.4vw',
        height: '42.7vh',
        margin: '7.5%',
        boxShadow: '0 4px 4px 0 black',
        color: '#EB7125',
    },
    ad: {
        borderRadius: '15px',
        width: '20.4vw',
        height: '42.7vh',
        margin: '7.5%',
        boxShadow: '0 4px 4px 0 black',
        color: '#EB7125',
    },
    q_a_main: {
        background: '#EB7125',
        wdith: '59.7vw',
        height: '90.2vh',
        boxShadow: '0 4px 4px 0 black',
        borderRadius: '20px',
    },
    profilecontainer: {
        flex: "0.6",
    },
    profilecontainer2: {
        background: "#EB7125",
        borderRadius: '45px',
    }

}