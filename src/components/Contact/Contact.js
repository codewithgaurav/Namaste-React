import { useState } from 'react';
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
            <br />
            <br />
            <div className="contact-wrapper flex justify-around align-center ">
                <div className="contact-page">
                    <h1> Contact Us </h1>
                    This is the contact us page of Gourmet Hunt
                </div>
                <div className="contact-counter absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ">
                    <h1>Counter</h1>
                    <div className="count m-5 text-center font-bold text-2xl ">{count}</div>
                    <button className="incre-btn bg-[#008000] h-8 w-24 m-1 font-bold rounded-md " onClick={() => setCount(count + 1)}>Increment</button>
                    <button className="reset-btn bg-[#ff4500] h-8 w-24 m-1 font-bold rounded-md" onClick={() => setCount(0)}>Reset</button>
                    <button className="decre-btn bg-[#1e90ff] h-8 w-24 m-1 font-bold rounded-md disabled:opacity-75" onClick={(handleClick)} disabled={count === 0}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Contact; 