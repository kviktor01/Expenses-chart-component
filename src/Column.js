import React from 'react'

export default function Column({max, isMax, currentValue}) {
  let height=Math.round((currentValue.amount)/max*150)+"px"
  console.log(height)
    return (
    <div className="column">
        <div className={isMax ? "max":"notMax"} style={{height:`${height}`}}><span className="column-value">{"$"+currentValue.amount}</span></div>
        
        <span>{currentValue.day}</span>
    </div>
  )
}
