import React, { Component } from 'react';
import Message from './message';
import { connect } from 'react-redux'

class Show extends Component {
        render() {
            const { data, message } = this.props.cat
            return (
                 <div className="">
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


const mapStateToProps = (state) => {
    // console.log(state.user);
    return {
        cat: state.cat
    }
}

// export default Show;
export default connect(mapStateToProps)(Show)
