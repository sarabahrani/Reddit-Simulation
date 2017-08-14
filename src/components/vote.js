import React from 'react';
import { connect } from 'react-redux';
import { upVote, downVote } from '../actions';
class Vote extends React.Component {
    upVote = () => {
        this.props.upVote(this.props.id);
    }
    downVote = () => {
        this.props.downVote(this.props.id);
    }
    render() {
        const p = this.props;
        return (
            <div>
                <a onClick={this.upVote}> <span className="glyphicon glyphicon-arrow-up"></span></a>
                <p>{p.ups - p.downs}</p>
                <a onClick={this.downVote}><span className="glyphicon glyphicon-arrow-down"></span></a>
            </div>
        );
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        upVote: (id) => dispatch(upVote(id)),
        downVote: (id) => dispatch(downVote(id)),

    };
};
function mapStateToProps(state, ownProps) {
    return {
        ups: ownProps.ups ? ownProps.ups : 0,
        downs: ownProps.downs ? ownProps.downs : 0,
    };
}
export default connect(mapStateToProps, mapDispatchToProp)(Vote);