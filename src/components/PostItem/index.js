import React, { Component } from 'react';

import PostHeader from '../PostHeader';
import PostComments from '../PostComments';

import './style.css'

class PostItem extends Component {
  render() {
    return (
      <div className="post">
        <PostHeader author={this.props.author} date={this.props.date} />
        <p className="post-content">{this.props.content}</p>
        <PostComments comments={this.props.comments} />
      </div>
    );
  }
}

export default PostItem;