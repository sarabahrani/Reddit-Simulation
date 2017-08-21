import React from 'react';
import Vote from './vote';
class Reddit extends React.Component {
    render() {
        const p = this.props.data;
        let thumbnail = {};
        if (p.thumbnail == "self")
            thumbnail = <img className="thumbnail self" />;
        else
            thumbnail = <img src={p.thumbnail} />;

        return (
            <div id="reddit">
                <Vote {...p} />
                <a className="thumbnail">
                    {thumbnail}
                </a>
                <p className="link">
                    <a href={p.url}>{p.title}</a>
                </p>
                <div className="tagline">
                    <p className="domain">{p.domain}</p>
                    <p className="author">by: {p.author}</p>
                    <p className="comment" >{p.num_comments} comments</p>
                </div>
            </div>
        );
    }
}
export default Reddit;