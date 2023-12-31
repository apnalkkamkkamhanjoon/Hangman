import { Route, Routes } from "react-router-dom";
import * as P from "../page";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<P.Main />} />
            <Route path="/hangman" element={<P.Hangman />} />
            <Route path="/input" element={<P.Input />} />
            <Route path="/word" element={<P.Word />} />
            <Route path="/menu" element={<P.Menu />} />
            <Route path="/rank" element={<P.Rank />} />
        </Routes>
    )
}