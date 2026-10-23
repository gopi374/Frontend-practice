import React from 'react' 
import useToggle from './Hooks/useToggle'

const custom_hooks = () => {
    const [value, handleToggle] = useToggle();
    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
            <button onClick={()=>{handleToggle(false)}}>Hide</button>
            <button onClick={()=>{handleToggle(true)}}>Show</button>

            {value ? (<div>
                <h1>THis is Secret</h1>
            </div>) : null}
        </div>
    )
}

export default custom_hooks
