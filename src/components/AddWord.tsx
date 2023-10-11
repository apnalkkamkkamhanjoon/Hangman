import { useEffect, useState } from "react"
import words from '../assets/wordList.json'

export default function AddWordInput() {
    const [word, setWord] = useState("");

    const handleAddWord = () => {
        words.push(word)
        setWord("");
    };

    return (
        <>
            <div style={{ position: "absolute", top: '30%' }}>
                <input placeholder="Enter the word" style={{ width: '600px', height: '50px', fontSize: '1.5rem', outline: 'none', padding: '1rem' }} value={word}
                    onChange={(e) => setWord(e.target.value)} />
                <button style={{ width: '100px', height: '50px', marginLeft: '20px', top: '50%', fontSize: '1.5rem', position: 'relative' }}
                    onClick={handleAddWord}>등록</button>
            </div>
        </>
    )
}