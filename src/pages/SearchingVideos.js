import React from "react";
import youtubeApi from "../ApiYoutube"

import Videoplayer from "../components/VideoPlayer"

class Search extends React.Component {
  state = { title: "",
  
   };
    

  onSearchChanged = event => {
    const _title = event.target.value;
    this.setState({ title: _title });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
    console.log(this.state.value)
  };
  
  render() {
    return (
      <>
        <form  onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input  className="inp"
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Search ..."
            />
        
             </div>
        </form>
      </>
    );
  }
}

export default Search;

