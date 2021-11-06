import React from "react";

export const DrawComponent = ({counter}) => {
   
    return (
    <div> 
        
        <img width="400px" src={`/assets/img${counter}.png`} alt="" />
        
        
        
    </div>
    );
};
