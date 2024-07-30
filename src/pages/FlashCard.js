import { useState } from 'react';
import '../css/flash.css';
import dataArr from '../data'
import Flash from "../components/Flash";
import Choice from '../components/Choice';


const FlashCard = () => {

  const [showFlash, setShowFlash] = useState(false)
  const [activeChoice, setActiveChoice] = useState({})

  const findData = (id) => {
    return dataArr.find((dataArr) => dataArr.id === id)
  }

  const handleChoice = (id) => {
    setShowFlash(true)
    const dataItem = findData(id)
    setActiveChoice(dataItem)
  }

  const handleActive = () => {
    setShowFlash(prevVal => !prevVal)
  }


  return (
    <div className="App">
      {showFlash ? <Flash choice={activeChoice} handleActive={handleActive} /> : <Choice handleChoice={handleChoice} dataArr={dataArr}/>}
    </div>
  );
}

export default FlashCard;
