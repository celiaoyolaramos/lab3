import React from "react";
import { DrawComponent } from "./Componets/DrawComponent";
import { KeyBoardComponent } from "./Componets/KeyBoardComponent";
import { WordComponent } from "./Componets/WordComponent";
import { useCounter } from "./hooks/useCounter";
import { useWord } from "./hooks/useWord";
import "./styles.css";


export const HangManComponent = () => {
        const [listWord, , ifContains, isValid] = useWord("breaking bad");
        const [counter,, decrementCounter] = useCounter(6, {max: 6, min: 0});
        const handlerKeyPress = (key) => {
            ifContains(key);
            if (!isValid(key)) {
                decrementCounter();
            }
        };
        
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
            <DrawComponent counter={counter} />
            <WordComponent listWord={listWord} />
            <KeyBoardComponent  handlerKeyPress={handlerKeyPress} />
        </div>
    );
};


