// import Service from './service.js'; import './index.scss'; import
// './main.scss'; import page from './components/page'; /*   GetImage ==>
// Service.getImageItems(number) */
// document.addEventListener('DOMContentLoaded', () => {
// document.getElementById('logo').src = './images/logo.svg'; });

import React, {Component} from 'react';
import Service from '../service.js';
import Show from './show';
import Message from './message';
import { connect } from 'react-redux'
import { getDataCat } from "../redux/actions/cat";

// Service.getImageItems(number)
class Text extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 0,
                data: '',
                message:''
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        async componentWillMount() {
            console.log("willmount Text.js");
            this.setState({value: 4});

        }
        async handleChange(event) {
            let value = await event.target.value
            this.setState({value: value});
            console.log(" value" + typeof this.state.value)
        }

        handleSubmit(event) {
            Service.getImageItems(this.state.value)
                // .then(results => console.log(results))
                this.props.getDataCat(this.state.value)
                .then(results => {
                    this.setState({data : results, message:'success'})
                })
                .catch(error => this.setState({message: 'Failed'}))
            event.preventDefault();
        }
        
        render() {
                    
                    return (
                            <div className="container">
                                  <form onSubmit={this.handleSubmit}>
                                      <label>
                                               Type amout of image:
                                                        <input type="number" value={this.state.value} onChange={this.handleChange} min="1" max="15"/>
                                      </label>
                                               <input type="submit" value="Submit"/>
                                    </form>
                                        <Message />
                                        <Show />
                                   
                             </div>
                                                       

                        
                    );
            
            
        }
}

// export default Text;


const mapStateToProps = (state) => {
    // console.log(state.user);
    return {
        cat: state.cat.data
    }
}

const mapDispatchToProps = (dispatch) => ({
    getDataCat: (data) => dispatch(getDataCat(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Text)
//  {this.state.data?<div><Show data={this.state.data}/></div>:<div><Message message="Loading..."/></div>}