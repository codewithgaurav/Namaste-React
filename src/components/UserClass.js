import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    componentDidMount() {
        console.log(this.props.name + " " + "componentDidMount")
    };

    render() {
        const { name, location, contact, linkedin } = this.props;
        const { count } = this.state;
        /* Prevents the decrement button from decreasing the value of counter below 0 */
        const handleClick = () => {
            if (count > 0) {
                this.setState({ count: this.state.count - 1 });
            };
        };

        return (
            <div className="user-class">
                <div className="user-card">
                    <h3>Meet Our Team</h3>
                    <h4>{name}</h4>
                    <h5>Location: {location}</h5>
                    <h5><span>Contact:{" "}<a href="https://github.com/codewithgaurav">{contact}</a></span></h5>
                    <h5><span>LinkedIn:{" "}<a href="https://www.linkedin.com/in/codewithgaurav/">{linkedin}</a></span></h5>
                </div >
                <div className="counter">
                    <div className="count">{count}</div>
                    <button className="incre-btn" onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                    <button className="reset-btn" onClick={() => this.setState({ count: this.state.count = 0 })}>Reset</button>
                    <button className="decre-btn" onClick={(handleClick)} disabled={count === 0}>Decrement</button>

                </div>
            </div>
        );
    };
};

export default UserClass;