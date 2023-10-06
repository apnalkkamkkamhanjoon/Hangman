import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                조잡한 행맨
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                *화면 비율을 67%까지 축소하시고 하면 보기 편하심ㅎ | Caps Lock 켜져있으면 키보드 입력 X*
            </p>
            <div>
                <hr />
                <Link style={{ fontSize: '2rem', textDecoration: 'none', color: 'blue' }} to='/hangman' >플레이</Link>
                <hr />
                <Link style={{ fontSize: '2rem', textDecoration: 'none', color: 'blue' }} to='/input' >등록</Link>
                <hr />
                <Link style={{ fontSize: '2rem', textDecoration: 'none', color: 'blue' }} to='/word' >단어장</Link>
                <hr />
            </div>
        </>
    );
};

export default Main;