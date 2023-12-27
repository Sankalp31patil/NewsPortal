import React, { Component } from 'react'

// import React from 'react'

import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

// let [articles,setArticles] = useState([]);
// let [loading,setLoading] = useState(true);
// let [page,setPage] = useState(1);
// let [totalResults,setTotalResults] = useState(0);


// export default function News() {
//     return (
//       <div>
        
//       </div>
//     )
//   }

export class News extends Component {

    constructor(){

        super();
        this.state = {

           articles: [],
           loading : true,
           page: 1,
           totalResults: 0

        }

    }

    forRequest = async ()=> {

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Portal`
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json();
        this.props.setProgress(70)
        this.setState({loading: false, 
            articles: parsedData.articles,
            totalResults: parsedData.totalResults})
        this.props.setProgress(100)
    }

    componentDidMount = async ()=> {

       this.forRequest();

    }

    capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // onClickPrev = async ()=> {

    //     await this.setState({page : this.state.page - 1})      
    //     this.componentDidMount()
        
    // }

    // onClickNext = async ()=> {

    //     if(Math.ceil(this.state.totalResults/this.props.pageSize) > this.state.page) {
            
    //         await this.setState({page : this.state.page + 1})
    //         this.componentDidMount()    

    //     }

    // }


    fetchMoreData = async () => {
        this.setState(prevState => ({ page: prevState.page + 1 }), async () => {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            
            this.setState(prevState => ({
                articles: prevState.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults
            }));
        });
    };
    

    render() {
        return (
            
        <>
            <h2 className='text-center'> Top <strong style={{color:`${this.props.titleColor}`}}>{this.capitalizeFirstLetter(this.props.category)}</strong> Headlines </h2>
            {this.state.loading && <Loading></Loading>}

            <InfiniteScroll
                dataLength = {this.state.articles.length} 
                next = {this.fetchMoreData}
                hasMore = {this.state.articles.length !== this.state.totalResults}
                loader = {<Loading />} >
        
        <div className="container my-3">
            <div className="row">
                {!this.state.loading && this.state.articles.filter((element) => {return element.content !== "[Removed]"}).map((element)=> {
                    return (
                        <div className="col-md-4" key = {element.url}>
                            <NewsItem description = {element.description} newsUrl = {element.url} title = {element.title} imageUrl = {element.urlToImage} author = {element.author} publishedAt = {element.publishedAt} name = {element.source.name} spanColor = {this.props.spanColor} />
                        </div>
                        )
                })}
            </div>
        </div>
              
            </InfiniteScroll>


            {/* <div style = {{visibility: this.state.loading ? "hidden" : ""}} className="container d-flex justify-content-between mt-3" >
            <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.onClickPrev}> &larr; Previous</button>
            <button disabled = {Math.ceil(this.state.totalResults/this.props.pageSize) <= this.state.page} type="button" className="btn btn-dark" onClick={this.onClickNext}> Next &rarr; </button>
            </div> */}
        </>
    )
  }
}

export default News
