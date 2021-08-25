import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MusicItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Link to={`/music/${data.id}`}>
        <img src={data.snippet.thumbnails.medium.url} alt="" />
        <h3>{data.snippet.title}</h3>
      </Link>
    );
  }
}

export default MusicItem;
