import "./Article.css"


const Article = ({data}) =>{    
    console.log(data)
   
    return(
        <div className="all-article">
            {
                data.map ((oneArticle)=>{
                    const {id, name, article} = oneArticle
                    return <div key={id} className="one-article">
                        <h1>{name}</h1>
                        <p>{article}</p>                        
                        </div>
                        
                })
            }
        </div>
    )
}
export default Article;