import React from 'react'
import './ModuleCard.scss'
import summary from 'assets/svgs/summary.svg'
import envelope from 'assets/svgs/envelope.svg'
import phone from 'assets/svgs/phone.svg'
import location from 'assets/svgs/location.svg'

function ModuleItem ({icon, text}) {
    return (
        <div className="modulecard__item">
            <span className="history-dot"></span>
            <div className="title-n-date">
                <h4 className="title">Searched “Journal Entries” on Division module</h4>
                <p className="date">22:10 15/09/2020 <span className="dot-devide"></span>Web</p>
            </div>
        </div>
    )
}

function Module() {
    return (
        <div className="modulecard">
            <div className="division__header">
                <img width="31px" height="31px" src={summary} alt="division summary"/>
                <p className="">Module History </p>
            </div>
            <div className="division__body">
                <ModuleItem text="0801 234 5678" icon={phone}/>
                <ModuleItem text="asbfefr@gmail.com" icon={envelope}/>
                <ModuleItem text="Mojidi, Lagos" icon={location} />
                
            </div>
        </div>
    )
}

export default Module
