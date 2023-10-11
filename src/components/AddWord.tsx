import { useEffect } from "react"

export default function AddWordInput() {
    document.addEventListener('keydown', function (e: KeyboardEvent) {
        const key = e.key

        if (key === 'Enter') return
        e.preventDefault()
    })

    return (
        <>
            <form>
                <div style={{ position: "absolute", top: '30%' }}>
                    <input placeholder="Enter the word" style={{ width: '600px', height: '50px', fontSize: '1.5rem', outline: 'none', padding: '1rem' }} />
                    <button style={{ width: '100px', height: '50px', marginLeft: '20px', top: '50%', fontSize: '1.5rem', position: 'relative' }} >등록</button>
                </div>
            </form>
        </>
    )
}