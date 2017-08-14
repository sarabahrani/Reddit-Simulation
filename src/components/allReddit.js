import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReddits } from '../actions';
import Reddit from './reddit';
class AllReddit extends React.Component {
    fetchReddits = () => {
        this.props.fetchReddits();
    };

    render() {
        const p = this.props;
        let redditList = [];
        if (p.reddits) {
            redditList = p.reddits.map((element) =>
                <li key={element.data.id}>
                    <Reddit {...element} />
                </li>
            );
        }
        return (
            <div>
                <button onClick={this.fetchReddits}>click</button>
                <ul>{redditList}</ul>
            </div>
        );
    }
}
AllReddit.proptypes = {
    fetchReddits: PropTypes.func,
    reddits: PropTypes.array,
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchReddits: () => dispatch(fetchReddits())
    };
};
function mapStateToProps(state) {
    return {
        reddits: state.form.reddits,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AllReddit);