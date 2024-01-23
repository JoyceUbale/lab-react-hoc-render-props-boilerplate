import React from "react";
import RenderProp from "./RenderProps";


const LikePostRender = () =>{
    return(
        <RenderProp>
            {
                ({count,handleCount})=>(
                    <div>
                        <button onClick = {handleCount}>Like Post Render {count}</button>
                    </div>
                )
            }
        </RenderProp>
    )
}
export default LikePostRender