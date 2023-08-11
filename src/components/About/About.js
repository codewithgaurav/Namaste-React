import React from 'react';
import UserClass from "../UserClass";
import "./About.css";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="about-page" >
                <div className="about-wrapper">
                    <h1>About Us</h1>
                    <h4>This is the About us page of Gourmet Hunt.</h4>
                </div>
                <div className="about-class-comp">
                    <UserClass contact="codewithgaurav" linkedin="codewithgaurav" />
                </div>
            </div>
        )
    }
}

export default About
