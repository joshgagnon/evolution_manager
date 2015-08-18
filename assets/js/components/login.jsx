import React from 'react/addons'
import { Input, ButtonInput } from 'react-bootstrap';
import Request from '../util';


export default class Login extends React.Component {
    componentDidMount() {
        console.log('mounted login');
    }
    submit(e){
    	e.preventDefault();
    	var result = Request('/login');
        console.log(result)
    }
    render() {
        return <form ref="form" method="post" target="login" onSubmit={::this.submit}>
        	<Input type="text" ref="email" placeholder="Email" />
        	<Input type="password" ref="password" placeholder="Password"/>
        	<ButtonInput type='submit' value='Sign In' />
        </form>;
    }
}

