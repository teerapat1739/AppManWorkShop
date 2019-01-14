import React, { Component } from 'react';
import { connect } from 'react-redux'

class Message extends Component {
    render() {
        const { message } = this.props.cat
        function renderMessage () {
            return (
              <div>
                {(() => {
                  switch(message) {
                    case 'SUCCESS':
                      return <div className="alert alert-success">{message}</div>;
                    case 'Loading...':
                      return <div className="alert alert-warning">{message}</div>;
                    case 'FAILED':
                      return <div className="alert alert-danger">{message}</div>;
                    default:
                        return <div className="alert alert-warning">{message}</div>;
                  }
                })()}
              </div>
            );
          }
        return (
             <div>
                {renderMessage()}
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

// export default Message;
export default connect(mapStateToProps)(Message)
