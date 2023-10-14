import * as C from "../components";

const Input = () => {
    return (
        <>
            <C.MainPageBtn />
            <h1>단어를 추가해주세요</h1>
            <h2>한글 X 오직 영어만 가능</h2>
            <C.AddWord />
        </>
    );
};

export default Input;