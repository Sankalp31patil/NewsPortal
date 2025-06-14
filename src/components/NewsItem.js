import React from 'react'

export default function NewsItem(props) {
  // Destructuring props for easier use
  let { title, description, imageUrl, newsUrl, author, publishedAt, name, spanColor } = props;

  return (
    <div className="my-3">
      {/* 🏷️ Category badge at top-right (e.g., Business, Health) */}
      <span
        className={`badge text-bg-${spanColor}`}
        style={{ right: '0', zIndex: '1' }}
      >
        {name}
      </span>

      {/* 📰 News card container */}
      <div className="card">

        {/* 🖼️ News thumbnail (fallback to '/default' if no image provided) */}
        <img
          src={imageUrl ? imageUrl : "/default"}
          className="card-img-top"
          alt="News"
        />

        {/* 📄 Card body with title, description, and metadata */}
        <div className="card-body">

          {/* 📝 News title */}
          <h5 className="card-title">{title}</h5>

          {/* 📃 Short description */}
          <p className="card-text">{description}</p>

          {/* 👤 Author and publish date */}
          <p className="card-text">
            <small className="text-body-secondary">
              By <strong>{author ? author : "unknown"}</strong> on {new Date(publishedAt).toGMTString()}
            </small>
          </p>

          {/* 🔗 CTA button: Opens original article or video */}
          <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">
            {name === "YouTube" ? "Watch" : "Read More"}
          </a>
        </div>
      </div>
    </div>
  );
}
