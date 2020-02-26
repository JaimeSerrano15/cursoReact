import React, {Component} from 'react';
import axios from 'axios';


const initStates = {
    username: "",
    password: ""
}

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            ...initStates,
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.id] : event.target.value,
        })
    }

    submitHandler = async (event) => {
        event.preventDefault();
        try {
            const {
                data
            } = await axios.post("https://reactcourseapi.herokuapp.com/user/login",{...this.state});
            console.log(data);
            
            this.setState({...initStates});
            
        } catch ({response}) {
            const {data} = response;
            console.log(data.message);
        }
    }

    render(){
        return(
            <>
                <form onSubmit={this.submitHandler}>
                    <h1>BookFace</h1>
                    <label>
                        Ingrese su username o email:
                        <input onChange={this.changeHandler} id="username" type="text" placeholder="Username or email" value={this.state.username} />
                    </label>
                    <br/>
                    <label>
                        Ingrese su password: 
                        <input onChange={this.changeHandler} id="password" type="password" placeholder="Password" value={this.state.password} />
                    </label>
                    <br/>
                    <button type="submit">Sign up</button>
                </form>
            </>
        )
    }



}
