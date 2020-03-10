import React, {useState} from "react";

const Project = () => {
    const [count, setCount] = useState(10);
    return (
        <div>
            <span onClick={() => {
                setCount(cur => cur + 1)
            }}>+</span>
            <p>{count}</p>
        </div>
    )
};

export default Project;