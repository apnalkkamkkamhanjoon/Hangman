import React, { useEffect } from 'react';

type useHandlerProps = {
    addGuessedLetter: (letter: string) => void,
    setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>,
    setWordToGuess: React.Dispatch<React.SetStateAction<string>>,
    getWord: () => string
}

const useHandler = ({ addGuessedLetter, setGuessedLetters, setWordToGuess, getWord }: useHandlerProps) => {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key

            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetter(key)
        }
        document.addEventListener('keypress', handler)

        return () => {
            document.removeEventListener('keypress', handler)
        }
    }, [])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key

            if (key !== 'Enter') return

            e.preventDefault()
            setGuessedLetters([])
            setWordToGuess(getWord())
        }
        document.addEventListener('keypress', handler)

        return () => {
            document.removeEventListener('keypress', handler)
        }
    }, [])

};

export default useHandler;