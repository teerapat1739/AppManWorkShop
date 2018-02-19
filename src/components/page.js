import React, { Component } from 'react';
import Service from '../service.js';
class page extends Component {
    constructor(props) {
        
        
        
        super(props);

        this.state = {
            number: ''
            
        }
        this.handleGetImageItems = this.handleGetImageItems.bind(this);
    }
    handleGetImageItems(number) {
            // Service.getImageItems(number)
            console.log('====================================');
            console.log(Service.getImageItems(number));
            console.log('====================================');
    }
    render() {
        return (
             <div>stweptoipsodjgpwotjp
                  <form>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
             </div>
        )
    }
}

export default page;