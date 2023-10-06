import { useCallback, useState } from "react";
import words from '../assets/wordList.json';
import * as C from "../components";
import useHandler from "../hooks/useHandler";

const getWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}

function HangmanPlay() {
    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const inCorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

    const isLoser = inCorrectLetters.length >= 6
    const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isLoser || isWinner) return

        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isWinner, isLoser])

    useHandler({ addGuessedLetter, setWordToGuess, setGuessedLetters, getWord })

    return (
        <>
            <div style={{
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                margin: '0 auto',
                alignItems: 'center'
            }}>
                <div style={{ fontSize: '2rem', textAlign: 'center' }}>
                    {isWinner && 'Winner! - Refresh & Enter to try again'}
                    {isLoser && 'Nice Try! - Refresh & Enter to try again'}
                </div>
                <C.HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
                <C.HangmanWord
                    reveal={isLoser}
                    guessedLetters={guessedLetters}
                    wordToGuess={wordToGuess} />

                <div style={{ alignSelf: 'stretch' }}>
                    <C.Keyboard
                        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
                        disabled={isWinner || isLoser}
                        inactiveLetters={inCorrectLetters}
                        addGuessedLetter={addGuessedLetter}
                    />
                </div>
            </div>
        </>
    )
}

export default HangmanPlay