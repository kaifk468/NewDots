import React,{Component} from 'react'

export default class NewsItem extends Component{
    render()
    {
        let {newsTitle,description,imageUrl,url,author,source}=this.props;
        return (
            <>
            {/* <h3>Hello I m new Item</h3> */}
            <div className="card">
                <img src={!imageUrl?"https://www.apfelpage.de/wp-content/uploads/2017/09/Twitter_Logo.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{newsTitle}...</h5>
                    <p className="card-text">{description}...</p>
                    <footer class="blockquote-footer my-2 text-end">{author}</footer>
                    
                    <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary">Read more</a>
                    
                </div>
                <div className="card-footer text-muted text-small">
                    {source}
                </div>
                </div>
            </>
            
        )
    }
}
