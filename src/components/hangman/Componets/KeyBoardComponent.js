import React from "react";
import { useKeyBoard } from "../hooks/useKeyBoard";
import { KeyComponent } from "./KeyComponent";

export const KeyBoardComponent = ({handlerKeyPress}) => {
    const [KeyBoard, setKeyBoard] = useKeyBoard();
    const handlerKey = (key) => {
        const newkeyBoard = KeyBoard.map((item) => {
            const { key: keylist} = item;
            if (key === keylist) {
                item.status = true;
            }
            return item;
        });
        setKeyBoard(newkeyBoard);
        handlerKeyPress(key);
    };
    return (
    <div className="flex-container">
        {KeyBoard.map((item) => (
            <KeyComponent 
            key={item.id} 
            letter={item.key} 
            handlerKey={handlerKey}
            status={item.status}
            />
        ))}
    </div>
    );
};