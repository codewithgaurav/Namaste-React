import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                name: "Krish Trish",
                location: "India",
                avatar_url: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1691396699~exp=1691397299~hmac=a5a0432632db4c82bc5e0c0d18e87d347bf84086d0a457ae66c356fd185a3cd3"
            }
        };
    };


    async componentDidMount() {
        try {
            const data = await fetch("https://api.github.com/users/codewithgaurav");
            const json = await data.json();
            // console.log(json);
            this.setState({
                userInfo: json
            })
        } catch (error) {
            alert("Oops! We think an error occured");
            console.log(error);
            handle(error);
        }

    }
    render() {
        const { contact, linkedin } = this.props;
        const { count } = this.state;
        const { name, location, blog, html_url, avatar_url } = this.state.userInfo;
        /* Prevents the decrement button from decreasing the value of counter below 0 */
        const handleClick = () => {
            if (count > 0) {
                this.setState({ count: this.state.count - 1 });
            };
        };

        /* target="_blank" opens the link in a new tab in lines 45 and 46*/
        return (
            <div className="user-class flex justify-around align-center overflow-y-hidden" >
                <div className="avatar  ">
                    <img className="avatar_img rounded-full max-w-[80%] max-h-[80%] " src={avatar_url} alt="avatar" />
                </div>
                <div className="user-card border border-[2px solid black] rounded-3xl p-5  bg-[#ffe4e1] h-auto hover:shadow-xl shadow-[0 1px 5px #f9f9f9] duration-300 ">
                    <h3>Meet Our Team</h3>
                    <br />
                    <h4>{name}</h4>
                    <br />
                    <h5>Location: {location}</h5>
                    <br />
                    <h5><span>Contact:{" "}<a href={html_url} target="_blank" style={{ color: "blue" }}>{contact}</a></span></h5>
                    <br />
                    <h5><span>LinkedIn:{" "}<a href={blog} target="_blank" style={{ color: "blue" }}>{linkedin}</a></span></h5>
                    <br />

                </div >
            </div >
        );
    };
};

export default UserClass;