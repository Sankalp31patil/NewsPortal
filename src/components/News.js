import React, { Component } from 'react'

import NewsItem from './NewsItem'              // Component to display individual news items
import Loading from './Loading';               // Spinner/loading component
import InfiniteScroll from "react-infinite-scroll-component"; // For implementing infinite scroll

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],       // Array to store fetched news articles
      loading: true,      // Loading state for showing spinner
      page: 1,            // Current page number for pagination
      totalResults: 0     // Total number of articles from API
    }
  }

  // 🔄 Fetches articles for the current page
  forRequest = async () => {
    // Sets the document title based on the category
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Portal`;

    // Sets loading progress (for loading bar)
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    this.props.setProgress(30);

    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });

    this.props.setProgress(100);
  }

  // 🧠 React lifecycle method: runs once when component mounts
  componentDidMount = async () => {
    this.forRequest();
  }

  // 🔡 Capitalizes first letter of a string
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // 📥 Fetch more data when user scrolls to bottom (infinite scroll)
  fetchMoreData = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState(prevState => ({
        articles: prevState.articles.concat(parsedData.articles), // Append new articles to existing ones
        totalResults: parsedData.totalResults
      }));
    });
  };

  render() {
    return (
      <>
        {/* 🔖 Section title */}
        <h2 className='text-center'>
          Top <strong style={{ color: `${this.props.titleColor}` }}>
            {this.capitalizeFirstLetter(this.props.category)}
          </strong> Headlines
        </h2>

        {/* 🌀 Loading spinner while data is being fetched */}
        {this.state.loading && <Loading />}

        {/* ♾️ InfiniteScroll wraps the article list to load more on scroll */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container my-3">
            <div className="row">
              {/* Filter out any removed articles and render NewsItem cards */}
              {!this.state.loading && this.state.articles
                .filter((element) => element.content !== "[Removed]")
                .map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        description={element.description}
                        newsUrl={element.url}
                        title={element.title}
                        imageUrl={element.urlToImage}
                        author={element.author}
                        publishedAt={element.publishedAt}
                        name={element.source.name}
                        spanColor={this.props.spanColor}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
