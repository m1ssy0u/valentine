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
        <button className="center"  style={{fontSize : `${yesBtnSize}%`,backgroundColor : "#26B023"}} onClick={()=>{
          setSayno(0)
        }}>Yes</button>
        <br />
        <button className="nobtn center" style={{display : displayNoBtn,fontSize : "100%",backgroundColor : "#CF3B3B"}} onClick={()=>{
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
          <h2 className="center">Love you naaa</h2>
      </>
    )
  }

}

export default App
