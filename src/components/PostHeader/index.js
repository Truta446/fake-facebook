import React, { Component } from 'react';

import './style.css'

class PostHeader extends Component {
  render() {
    return (
      <div className="post-header">
        <img className="avatar" src={this.props.author.avatar} />
        <div className="details">
          <span>{this.props.author.name}</span>
          <span>{this.props.date}</span>
        </div>
      </div>
    );
  }
}

export default PostHeader;