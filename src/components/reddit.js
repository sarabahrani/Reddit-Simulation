import React from 'react';
import Vote from './vote';
class Reddit extends React.Component {
render(){
    const p=this.props.data;
    return(
        <div>
            <Vote {...p}/>
            <img src={p.thumbnail}/>
            <h1><a href={p.url}>{p.title}</a></h1>
            <p>by: {p.author}</p>
            <p>{p.num_comments} comments</p>
        </div>
    );
}
}
export default Reddit;