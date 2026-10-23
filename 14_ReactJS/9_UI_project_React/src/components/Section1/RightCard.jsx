import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
    console.log(props.id)
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative  rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt=""/>
        <RightCardContent tag={props.tag} color={props.color} id={props.id}/>
    </div>
  )
}

export default RightCard