import React from "react"
import Card from "./Card"

const Articles = ({ articles }) => {
 
  return (
    <div>
     {
       articles.map((article, i)=> (
           <Card article={article} index={i}/>
         ))
     }
    </div>
  )
}

export default Articles


