import React from 'react'
import './LinkMap.scss'
import caretLeft from 'assets/svgs/caretLeft.svg'

function LinkMap() {
    return (
        <div className="linkMap">
           <span className="linkMap__text">Divisions</span> 
           <span className="linkMap__img"><img src={caretLeft} alt="next link" /></span> 
           <span className="linkMap__text"> Module </span>
        </div>
    )
}

export default LinkMap

