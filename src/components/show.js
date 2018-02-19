import React, { Component } from 'react';
import Message from './message';
class Show extends Component {
        render() {
            const { data } = this.props
            return (
                 <div className="">

                       {data && this.props.message=='success'
                        ?<div className="alert alert-success"><Message message="success"/></div>
                        :<div className="alert alert-warning"><Message message="Loading..."/></div>}
                       <div className="row">
                                    {data && data.map(d => {
                                        return (
                                            <div key={d.id} className="col-md-4">
                                                            <img src={d.image} alt="Placeholder image" className="img-thumbnail"/>
                                                            <div className="content">
                                                                <h1>{d.label}</h1>
                                                            </div>
                                            </div>
                                        )
                                    })}
                    </div>
                </div>
            )
        }
}

export default Show;