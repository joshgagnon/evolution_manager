import React from 'react/addons'
import pureRender from 'pure-render-decorator';
import Login from './login';

@pureRender
export default class Main extends React.Component {
    componentDidMount() {
        console.log('mounted main')
    }

    render() {
        return <div>
            <Login/>
        </div>;
    }
}

