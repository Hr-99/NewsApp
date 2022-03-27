import {useEffect, useState} from 'react';
import "../App.css";



function Main(){

    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("microsoft")
    useEffect(()=>{
            let url="https://newsapi.org/v2/everything?q=bitcoin&apiKey=4236af1e541e425d83129c2d2e1ce779";

            fetch(url).then((res)=>res.json())
            .then((news)=>{
                console.log(news.articles);
                setArticles(news.articles);
            })
    },[])

    function readVal(value){
        setSearch(value)
    }

    function searchNews(){
        
        let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=4236af1e541e425d83129c2d2e1ce779`;

            fetch(url).then((res)=>res.json())
            .then((news)=>{
                console.log(news.articles);
                setArticles(news.articles);
            })
    }

    useEffect(()=>{
        let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=4236af1e541e425d83129c2d2e1ce779`;

            fetch(url).then((res)=>res.json())
            .then((news)=>{
                console.log(news.articles);
                setArticles(news.articles);
            })
},[search])
    return(
        <>
        <div className="container">
        <div className="padd">
        <div className="filter">
             <input type="search" onChange={(event)=>{readVal(event.target.value)}} placeholder="Search...."/>
             <button className="btn" onClick={searchNews}>Search for the News</button>
        </div>
            <h1>News</h1>
            {
                articles.length===0?(<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"/>):
                articles.map((article,index)=>(
                    <div key={index} className="article">
                              <div className="padd-article">
                                <div className="news-img">
                                    <img src={article.urlToImage} alt="" />
                                     </div>
                                <div className="news-det">
                                    <h2>{article.title}</h2>
                                    <p>{article.author}</p>
                                    <p>{article.description}</p>
                                    <p>
                                        <a href={article.url} target="blank"><button className="btn">Read full article</button></a>
                                    </p>
                                      </div>
                              </div>
                    </div>
                ))
            }
        </div>
        </div>
        </>
    );

}

export default Main;