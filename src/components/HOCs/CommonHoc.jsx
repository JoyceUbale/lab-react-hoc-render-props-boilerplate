import React from "react";

const CommonHoc = (ChildComp) =>{
    let Logic = ()=>{
        const[count,setCount] = React.useState(0);

        function handleCount(){
            setCount(count+1)
        }

        return <ChildComp handleCount = {handleCount} count={count}/>
    }

    return Logic;
       
    
}

export default CommonHoc