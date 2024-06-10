import ReactDom from "react-dom/client"
import one from "./images/black-panther.jpg"
import two from "./images/caption-america.jpg"
import three from "./images/deadpool.jpg"
import four from "./images/dr-strange.jpg"
import five from"./images/hulk.jpg"
import six from "./images/ironman.png"
import seven from "./images/spiderman.jpg"
import eight from "./images/thor.jpg"
import Page from "./page"
import "./style.css"

const root=ReactDom.createRoot(document.getElementById("root"))
const itemss=[one,two,three,four,five,six,seven,eight]
const names=["black panther","caption america","deadpool","Dr-strange","hulk","ironman","spiderman","thor"]
root.render(
  <>
  {
   itemss.map(function(item,index){

     return <Page itemss={item} names={names[index]}></Page>
   })
  }
  
  </>
)