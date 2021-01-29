import React from 'react'
import './PageWrapper.scss'
function PageWrapper({children}) {
    return (
        <div className="page-wrapper">
            {children}
        </div>
    )
}

export default PageWrapper
