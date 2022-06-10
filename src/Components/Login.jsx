// import React, { Component } from "react";
// import axios from "axios";

// export default class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             email: "",
//             password: "",
//             password_confirmation: "",
//             loginErrors: ""
//         };
        
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(name) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit(event) {
//         const {email, password} = this.state

//         axios
//         .post(
//             "http:localhost:3001/sessions", {
//             user: {
//                 email: email,
//                 password: password, 
//             }
//         },

//         {withCredentials: true}
        
//         ).then(response => {
//             console.log("response")
//             // if(response.data.status === "created") {
//             //     this.props.handleSuccesfulAuth(response.data)
//             // }
//         })
//         .catch(error => {
//             console.log("login error", error);
//         });
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={this.state.email}
//                     onChange={this.handleChange}
//                     required
//                     />
//                     <button type="submit">Login</button>
//                 </form>
//             </div>
//         )
//     }

// }




