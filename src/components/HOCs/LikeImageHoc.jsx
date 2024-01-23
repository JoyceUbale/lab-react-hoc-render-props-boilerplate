import React from "react";
import CommonHoc from "./CommonHoc";

const LikeImageHoc = ({handleCount,count})=>{
    return(
        <div>
            <button onClick={handleCount}>Like Image {count}</button>
        </div>
    )
}
//Calling the HOC
export default CommonHoc(LikeImageHoc)