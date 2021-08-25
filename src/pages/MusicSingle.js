import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSingleMusicRequest,getSearchMusicRequest } from "../store/actions/music";
import Api from "../Api";

class MusicSingle extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const{params}=this.props.match.params
    const {q}=this.props.match.params
    this.props.getSingleMusicRequest(id)
    this.props.getSearchMusicRequest(params)
  }

  render() {
    const { singleMusic, singleMusicStatus,searchMusic,searchMusicStatus } = this.props;
    console.log(searchMusic)
    return (
      <div>
        {singleMusicStatus === 'ok' ? (
          <>
            <h1>{singleMusic.snippet.title}</h1>
            <iframe width="640" height="360" src={`https://www.youtube.com/embed/${singleMusic.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
            
          </>
        ) : null}
          
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  singleMusic: state.music.singleMusic,
  singleMusicStatus: state.music.singleMusicStatus,
  searchMusic:state.music.searchMusic,
  searchMusicStatus:state.music.searchMusicStatus
})

const mapDispatchToProps = {
  getSingleMusicRequest,
  getSearchMusicRequest
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicSingle)

export default Container;
