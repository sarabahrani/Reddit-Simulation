import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReddits } from '../actions';
import Reddit from './reddit';
class AllReddit extends React.Component {
    /* Tips:
    -componentDidMount() run right after the component mounted. 
    -Methods prefix with "will" are run before component mount and render happen
    - Methods prefix with "Did" are run after the component mount. If you want to interact with the browser, here is good place. 
     Do not setState() here! It causes re-rendering.*/
    componentDidMount(){
        this.props.fetchReddits();
    }

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
                <ul className="container">{redditList}</ul>
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