import React, { Component } from 'react';
import axios from 'axios';

import VideoList from './VideosList';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      videoList: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/v1/videos')
      .then((res) => {
        this.setState({
          videoList: res.data
        })
      })
  }

  render() {
    return (
      <div className='home'>
        {this.state.videoList &&
          <VideoList videos={this.state.videoList} />
        }
        {!this.state.videoList &&
          <p>LOADING</p>
        }
      </div>
    );
  }
}

export default Home;

