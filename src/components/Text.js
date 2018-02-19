// import Service from './service.js'; import './index.scss'; import
// './main.scss'; import page from './components/page'; /*   GetImage ==>
// Service.getImageItems(number) */
// document.addEventListener('DOMContentLoaded', () => {
// document.getElementById('logo').src = './images/logo.svg'; });

import React, {Component} from 'react';
import Service from '../service.js';
import Show from './show';
import Message from './message';

// Service.getImageItems(number)
class Text extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: '',
                data: '',
                message:''
            };

            this.handleChange = this
                .handleChange
                .bind(this);
            this.handleSubmit = this
                .handleSubmit
                .bind(this);
        }

        handleChange(event) {
                    this.setState({
                                    value: event.target.value,
                                    message:''
                                     });
        }

        handleSubmit(event) {
            
            Service.getImageItems(this.state.value)
                // .then(results => console.log(results))       
                .then(results => this.setState({data : results, message:'success'}))        
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
                                    {this.state.message =='Failed'
                                        ?<div className="alert alert-danger"><Message message={this.state.message}/></div>
                                        :<Show message={this.state.message} data={this.state.data}/>}
                                   
                             </div>
                                                       
                      
                        
                    );
            
            
        }
}

export default Text;

//  {this.state.data?<div><Show data={this.state.data}/></div>:<div><Message message="Loading..."/></div>}