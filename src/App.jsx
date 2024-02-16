//14.41 started
import { useState } from "react"
import "./App.css"


function App() {
  const [sayNo , setSayno] = useState(1)
  const [gif , setGif] = useState("https://static.varakorn.net/willyou.gif")
  const [yesBtnSize , setYesBtnSize] = useState(100)
  const [text,setText] = useState("Will you be my valentine?")
  const [displayNoBtn , setDisplayNoBtn] = useState()
  if(sayNo != 0){
    return (
      <>
        <img className="center" src={gif} alt=""/>
        <h2 className="center">{text}</h2>
        <button  style={{marginLeft : "30%",fontSize : `${yesBtnSize}%`}} onClick={()=>{
          setSayno(0)
        }}>Yes</button>
        <button className="nobtn" style={{marginLeft : "15%",display : displayNoBtn,fontSize : "100%"}} onClick={()=>{
          setSayno(sayNo + 1)
          setYesBtnSize(yesBtnSize + 100)
          if(sayNo >= 1 && sayNo < 3){
            setGif("https://static.varakorn.net/sad.gif")
            setText("Answer yes, please.")
          }
          else if(sayNo > 3){
            setDisplayNoBtn("none")
          }
        }}>No</button>
      </>
    )
  }
  else if(sayNo == 0){
    return(
      <>
          <img className="center" src="https://static.varakorn.net/love.gif" alt="" />
          <h2 className="center">Lov you naaa</h2>
      </>
    )
  }

}

export default App
