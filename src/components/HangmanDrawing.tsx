import { BODY_PARTS } from "../assets/BODY"

type HangmanDrawingTypes = {
    numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingTypes) {
    return (
        <div style={{ position: 'relative' }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div
                style={{
                    height: "50px",
                    width: "10px",
                    background: "black",
                    position: "absolute",
                    top: 0,
                    right: 0,
                }}
            />
            <div
                style={{
                    height: "10px",
                    width: "200px",
                    background: "black",
                    marginLeft: "120px",
                }}
            />
            <div
                style={{
                    height: "400px",
                    width: "10px",
                    background: "black",
                    marginLeft: "120px",
                }}
            />
            <div style={{ height: "10px", width: "250px", background: "black" }} />
        </div >
    )
}