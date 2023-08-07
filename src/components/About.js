import React from 'react';
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("Parent ComponentDidMount");
    }
    render() {
        console.log("Parent Render")
        return (
            <div className="about-page" >
                <h1>About Us</h1>
                <h4>This is the About us page of Gourmet Hunt.</h4>
                <div className="about-wrapper">
                    <UserClass name="Gaurav Sharma (Class)" location="Gurgaon" contact="codewithgaurav" linkedin="codewithgaurav" />
                </div>
            </div>
        )
    }
}

export default About
