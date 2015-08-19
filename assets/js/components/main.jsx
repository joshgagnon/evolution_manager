import React from 'react/addons'
import pureRender from 'pure-render-decorator';
import Router from 'react-router'
import Login from './login';
import Header from './header'
import Master from '../stores/master'
import {storeDecorator} from '../util'

@pureRender
@storeDecorator(Master)
export default class Main extends React.Component {

    render() {
    	console.log('main', this.state)
        return <div>
        	<Header/>
            <Router.RouteHandler {...this.state} />
        </div>;
    }
}

