"use strict";
import Reflux from 'reflux';
import { Socket } from '../util'
import Login from './login';

export default Reflux.createStore({
    init: function() {
        this.app = {login: Login.getInitialState()}
        this.listenTo(Login, this.onLogin);
    },
    getInitialState: function() {
        return this.app;
    },
    loadData: function(data) {
        Actions.setLogin(data.login);
    },
    onLogin: function(data) {
       this.app.login = data;
       this.update();
    },
    update: function(){
        console.log('update', this.app);
        this.trigger(this.app);
    }
});