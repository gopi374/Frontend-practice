import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 overflow-x-auto p-6 flex flex-nowrap gap-10' id='cards'>
        {props.users.map((elem,idx)=>{
          return <RightCard key={idx} img={elem.img} tag={elem.tag} color={elem.color} id={idx}/>
        })}
    </div>
  )
}

export default RightContent