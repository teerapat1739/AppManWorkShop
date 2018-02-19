// import Service from './service.js';
// import './index.scss';
// import './main.scss';
// import page from './components/page';
// /*
//   GetImage ==> Service.getImageItems(number)
// */

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('logo').src = './images/logo.svg';
// });


import React, {Component} from 'react';
import logo from './logo.svg';
import './index.scss';
import './main.scss';
import page from './components/page';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <page/>
            </div>
        );
    }
}

export default App;
