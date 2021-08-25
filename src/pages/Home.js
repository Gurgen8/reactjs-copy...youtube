import React, { Component } from 'react';
import { getTopMusicRequest } from "../store/actions/music";
import { connect } from "react-redux";
import MusicItem from "../components/MusicItem";
import { Link } from "react-router-dom";
import memoizeOne from 'memoize-one';
import youtubeApi from "../ApiYoutube"
import Videoplayer from "../components/VideoPlayer"
  import Search from "./SearchingVideos"

class Home extends Component {

state = {
  
    selectedVideoId: null
  };
  onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({
      selectedVideoId: response.data.items[0].id.videoId
    });
  };

  getTopMusic = memoizeOne((pageToken) => {
    this.props.getTopMusicRequest({
      pageToken,
    });
  });

  render() {
    const { pageToken } = this.props.match.params;
    const { topMusicList, topMusicInfo,searchMusicList } = this.props;
    this.getTopMusic(pageToken)
    console.log(searchMusicList)
    return (
      <div>
      <h1>YOU TUBE</h1>
      <div class="search">      <Search  onSearch={this.onSearch} /> </div>

      <div className="form_div">
          
        <Videoplayer videoId={this.state.selectedVideoId} /> </div>
            <h2>TOP SINGLES </h2>
        <div className="top">
        <ul className="ul">
    
          {topMusicList.map(music => (
            <li key={music.id}>
              <MusicItem data={music} />
            </li>
          ))}
        </ul>
        {topMusicInfo.prevPageToken ? (
          <button>
            <Link to={`/page/${topMusicInfo.prevPageToken}`}>Previous</Link>
          </button>
        ) : null}
        {topMusicInfo.nextPageToken ? (
          <button>
            <Link to={`/page/${topMusicInfo.nextPageToken}`}>Next</Link>
          </button>
        ) : null}
        
        </div>
      </div>
    );
  }
}

const mapStateTopProps = (state) => ({
  topMusicList: state.music.topMusicList,
  topMusicStatus: state.music.topMusicStatus,
  topMusicInfo: state.music.topMusicInfo,
});

const mapDispatchToProps = {
  getTopMusicRequest
}

const Container = connect(
  mapStateTopProps,
  mapDispatchToProps
)(Home)

export default Container;
