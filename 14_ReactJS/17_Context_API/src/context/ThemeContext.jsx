import React from 'react'
import { createContext } from 'react'

export const themeDataContext = createContext();

const ThemeContext = (props) => {

    const arr =[
        {
            id:1,
            name:"gopi",
            pic:"https://picsum.photos/id/1/5000/3333",
            sec:"A",
            no:2125
        },
        {
            id:2,
            pic:"https://picsum.photos/id/0/5000/3333",
            name:"ALex",
            sec:"c",
            no:2145
        },

    ]

    return (
        <div>
            <themeDataContext.Provider value={arr}>
                {props.children}
            </themeDataContext.Provider>
        </div>
    )
}

export default ThemeContext