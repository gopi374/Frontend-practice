
const RightCardContent = (props) => {
    // console.log(props.idx)
  return (
    <div className='flex flex-col justify-between h-full w-full absolute top-0 left-0 '>
            <h2 className='bg-white rounded-full w-12 h-12 flex justify-center items-center ml-7 mt-5 text-xl'>{props.id+1}</h2>
            <div className='p-5'>
                <p className='px-3 pb-5 text-grey-200 font-light text-white leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi numquam dolores ipsa explicabo, cumque sunt aliquid doloremque inventore obcaecati.</p>
                <div className='font-bold py-5 flex justify-between items-center'>
                    <button style={{backgroundColor:`${props.color}`}} className='bg-blue-500 py-3 px-6 rounded-4xl'>{props.tag}</button>
                    <button style={{backgroundColor:`${props.color}`}} className='font-bold text-2xl py-2 px-4 rounded-4xl'><i class="ri-arrow-right-line"></i></button>
                </div> 
            </div>
        </div>
  )
}

export default RightCardContent