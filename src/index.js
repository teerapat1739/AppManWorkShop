// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Text from './components/Text';
// ReactDOM.render(

//   <div>
//       <App/>,
//       <Text/>


//   </div>, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';
import Text from './components/Text';

const store = configureStore()

// const jsx = (
//     <div>
//     <Provider store={store}>
//         <App />
//         <Text />
//     </Provider>
//   </div>
//   );

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <Text />
        </div>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
