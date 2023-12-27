import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, publishedAt, name, spanColor} = this.props;
    return (
      <div className="my-3">
        <span
            className={`badge text-bg-${spanColor}`}
            style={{ right: '0', zIndex: '1' }}
          >
            {name}
          </span>        
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/The-Supreme-Court---ANI-_1702978600722.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {description} </p>
            <p className="card-text"><small className="text-body-secondary">By <strong>{author ? author : "unknown"}</strong> on {new Date(publishedAt).toGMTString()} </small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              {name === "YouTube" ? "Watch" : "Read More"}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
