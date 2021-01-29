import React from 'react'
import './OverviewCards.scss'
import info from 'assets/svgs/info.svg';

function OverviewCards({type, figure}) {
    return (
        <div className="overview">
            <div className="overview__unit_icon">
                <p>{figure}</p>
                <img src={info} alt="info" />
            </div>
            <p className="overview__title">
            {type}
            </p>
        </div>
    )
}

export default OverviewCards
