import React from 'react'
import ModuleCard from 'Components/ModuleCard';
import PageWrapper from 'Hoc/PageWrapper'
import LinkMap from 'Components/LinkMap'
import OverviewCard from 'Components/OverviewCards';
import DivisionCard from 'Components/DivisionCard';
import DivisionTable from 'Components/DivisionTable';
import './divisions.scss'

function Divisions() {
    return (
        <>
        <PageWrapper>
            <LinkMap />
            <div className="cards-wrapper">
                <OverviewCard type="Ongoing metric" figure="31454" />
                <OverviewCard type="Past metric" figure="2344"/>
                <OverviewCard type="Missed metric" figure="14224"/>
                <OverviewCard type="Failed metric" figure="635"/>
                <OverviewCard type="Pending metric" figure="11334"/>
            </div>
            <section className="division-section-wrapper">
            <aside className="division-aside">
            <DivisionCard />
            <ModuleCard />
            </aside>
            <div className="division-table">
                <DivisionTable />
            </div>
            </section>
            
        </PageWrapper>
        </>
    )
}

export default Divisions
