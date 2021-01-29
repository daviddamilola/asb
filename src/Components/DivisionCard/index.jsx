import React from 'react'
import './DivisionCard.scss'
import summary from 'assets/svgs/castle.svg'
import envelope from 'assets/svgs/envelope.svg'
import contact from 'assets/svgs/contact.svg'
import phone from 'assets/svgs/phone.svg'
import fingerprint from 'assets/svgs/fingerprint.svg'
import location from 'assets/svgs/location.svg'

function DivisionItem ({icon, text, active}) {
    return (
        <div className={`division__item ${active ? 'active': ''}`}>
            <img src={icon} alt="text"/>
            <a href="/divisions">{text}</a>
        </div>
    )
}

function Division() {
    return (
        <div className="division">
            <div className="division__header">
                <img width="31px" height="31px" src={summary} alt="division summary"/>
                <p className="">Division Summary</p>
            </div>
            <div className="division__body">
                <DivisionItem text="0801 234 5678" icon={phone}/>
                <DivisionItem text="asbfefr@gmail.com" icon={envelope}/>
                <DivisionItem text="Mojidi, Lagos" icon={location} />
                <DivisionItem active text="2 Journal entries" icon={contact}/>
                <DivisionItem text="24 fingerprints enrolled" icon={fingerprint}/>
            </div>
        </div>
    )
}

export default Division
