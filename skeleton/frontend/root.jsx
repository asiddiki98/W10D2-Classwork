import React from 'react'
import Clock from './clock.jsx'
import Tabs from './tabs.jsx'

let arr = [
    { title: "one", content: "this is one" },
    { title: "two", content: "this is two" },
    { title: "three", content: "this is three" },
]

function Root(){
    return (
    <div>
        <Clock />
        <Tabs arr={arr}/>
    </div>
    )
}

export default Root