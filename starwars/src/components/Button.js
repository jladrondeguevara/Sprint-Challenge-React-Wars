import React, {useState}  from "react";
import App from "../App.js";

const Button = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="button-wrapper">
            <button className="next-button" onClick={() => setCount(count + 1)}>Next Page</button>  
            {/* <App page = {count} />; */}
        </div>
    )
}

export default Button;