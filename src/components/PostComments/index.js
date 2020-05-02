import React, { Component } from 'react';

import './style.css'

class PostComments extends Component {
  render() {
    return (
      <div className="post-comments">
        <div className="divider" />
        {this.props.comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className="avatar" src={comment.author.avatar} />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostComments;