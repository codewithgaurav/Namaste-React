import React, { Component } from 'react';
import UserClass from "../UserClass";
import UserContext from '../../utils/UserContext';

class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="about-page flex w-full flex-col justify-start align-center h-[100vh] overflow-x-hidden bg-[#faaca8] text-center " >
                <div className="about-wrapper pb-12">
                    <br />
                    <br />
                    <h1 className="font-bold">About Us</h1>
                    <p>This is the About us page of Gourmet Hunt.</p>
                </div>
                <div>
                    <div>
                        LoggedInUser -
                        <UserContext.Consumer>
                            {({ loggedInUser }) => <h2 className="text-xl font-bold">{loggedInUser}</h2>}
                        </UserContext.Consumer>
                    </div>
                </div>
                <div className="about-class-comp">
                    <UserClass contact="codewithgaurav" linkedin="codewithgaurav" />
                </div>
            </div>
        )
    }
}

export default About
