import React, { Component } from "react";
import Gif from "./Gif";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

class NewsComponet extends Component {

    static defaultPropType = {
        country: "in",
        catagory: "general"
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult: 0,
            country: this.props.country,
            category: this.props.category,
            source: ""
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=b8ca0c53f3774ecc8f7c7b452124cc25`;
        //console.log(url)
        let data = await fetch(url);
        this.setState({
            loading: true
        })
        let parseData = await data.json();
        //console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResult: parseData.totalResults,
            loading: false,
            //source:parseData.source.name
        })
        document.title = `${this.state.category}-NewDots`
    }
    fin
    handelNext = async () => {
        console.log("next clicked");
        let totalPage = Math.ceil(this.state.totalResult / 20);
        //console.log(totalPage);
        if (this.state.page < totalPage) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b8ca0c53f3774ecc8f7c7b452124cc25&page=${this.state.page + 1}`;
            let data = await fetch(url);
            // $('html, body').animate({ scrollTop: 0 }, 'fast');
            window.scrollTo(0, 0);
            this.setState({
                loading: true
            })
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                articles: parseData.articles,
                page: this.state.page + 1,
                loading: false
            })
            document.getElementById("nextBtn").disabled = false;
        }
        else
            document.getElementById("nextBtn").disabled = true;
    }
    handelPrev = async () => {
        console.log("prec Clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b8ca0c53f3774ecc8f7c7b452124cc25&page=${this.state.page - 1}`;
        let data = await fetch(url);
        this.setState({
            loading: true
        })
        window.scrollTo(0, 0);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }
    fetchMoreData = async () => {
        this.setState({
            page:this.state.page+1
        });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=b8ca0c53f3774ecc8f7c7b452124cc25&page=${this.state.page}`;
        this.setState({loading:true})
        console.log(url)
        let data = await fetch(url);
        let parseData = await data.json();
        
          this.setState({
            articles: this.state.articles.concat(parseData.articles),
            loading:false
            //items: this.state.items.concat(Array.from({ length: 20 }))
          });
      };
    

    render() {
        return (
            <>
                <div className="container">
                    <h2 className='text-center my-3'>New Headlines</h2>
                    {this.state.loading && <Gif />}
{/*                   
                    <InfiniteScroll
                        dataLength={this.state.totalResult}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length!==this.state.totalResult}
                        loader={<spinner/>}
                    >
                        <div className="row my-2">
                            {this.state.articles.map((element) => {
                                return (

                                    <div key={element.url} className="col-md-4 my-2 "><NewsItem newsTitle={element.title} source={element.source.name}
                                        description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} /></div>
                                )
                            })}
                        </div>
                    </InfiniteScroll> */}
                
                    
                    <div className="row my-2">
                        {this.state.articles.map((element) => {
                            return (

                                <div key={element.url} className="col-md-4 my-2 "><NewsItem newsTitle={element.title} source={element.source.name}
                                    description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} /></div>
                            )
                        })}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1 ? true : false} type="button" className="btn btn-primary" onClick={this.handelPrev}>Prev</button>
                        <button type="button" className="btn btn-primary" id="nextBtn" onClick={this.handelNext}>Next</button>
                    </div>
                </div>
            </>
        )
    }
}
export default NewsComponet;