import { Route, Routes } from "react-router-dom";
import * as P from "../page";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<P.Hangman />} />
            <Route path="/input" element={<P.Input />} />
            <Route path="/word" element={<P.Word />} />
        </Routes>
    )
}