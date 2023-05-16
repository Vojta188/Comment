import {useState } from "react"
import "./Add.css"
import Article from "./Article"

const Add = ()=>{
    const[Data,setData] = useState([])
    const[article, setArticle] = useState({id:1,name:"",article:""})
    const formChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setArticle({...article, [name]: value })
        
      }

  const formSubmit = (event) => {
      event.preventDefault()
    
      if (article.article && article.name) {
        const newUser = { id:article.id++, name: article.name, article: article.article}
        setData( (users) => {


          return [...users, newUser]
        })
      } else {
        console.log("Něco nebylo vyplněno!");
        
      }
  }

    return(      
        <div>          
            <article>
                <form onSubmit={formSubmit} key={article.id} className="articleForm">
                    <input className="name" name="name" value={article.name} onChange={formChange} type="text" placeholder="Název..."/>
                    <textarea placeholder="Text" className="textArea" name="article" onChange={formChange} value={article.article}  rows="10" cols="50"/>
                    <input type="submit" value="Save"/>
                </form>
            </article>
            <Article data = {Data} />
            
        </div>
    )
}

export default Add