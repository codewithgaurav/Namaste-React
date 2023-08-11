import { useState } from 'react';
import "./Contact.css";

const Contact = () => {
    const [count, setCount] = useState(0);

    /* The handleClick function will prevent 'Decrement' button from decreasing the count below 0 */
    const handleClick = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="contact-wrapper">
                <div className="contact-page">
                    <h1> Contact Us </h1>
                    This is the contact us page of Gourmet Hunt
                </div>
                <div className="contact-counter">
                    Counter
                    <div className="count">{count}</div>
                    <button className="incre-btn" onClick={() => setCount(count + 1)}>Increment</button>
                    <button className="reset-btn" onClick={() => setCount(0)}>Reset</button>
                    <button className="decre-btn" onClick={(handleClick)} disabled={count === 0}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Contact; 