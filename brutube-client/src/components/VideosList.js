import React from 'react';
import { Link } from 'react-router-dom';

const Video = (props) => {
  const { url, title, author, views, uploadAt } = props;
  return (
    <div className="col-md-3">
      <div className="embed-responsive embed-responsive-16by9">
        <video controls>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-info">
        <h4><a href="#">{title}</a></h4>
        <p>{author}</p>
        <p>{views} views • {uploadAt} hours ago</p>
      </div>
    </div>
  );
};


function Videolist(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h4><Link to="/add">New</Link></h4>
        </div>
      </div>
      <div className="row">
        {
          props.videos
          // Videos are shown only when converted === true
          .filter(video => video.converted)
          .map((video, i) => <Video key={i} {...video} />)
        }
      </div>
    </div>
  );
}

export default Videolist;