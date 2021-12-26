import React from 'react'
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("SBI Card raises Rs 650 crore via bond issue", "The bonds, bearing interest at 5.82 per cent, have a tenure of three years and are set for maturity on December 24, 2024.")}
            {newsArticle("Attero to invest Rs 300 crore to ramp up lithium-ion battery recycling capacity to 11,000 tons", " India generates more than 50,000 tons of lithium-ion battery waste every year and it is growing in the range of 40-80 per cent depending on different models used for computing electric vehicle growth in India.")}
            {newsArticle("COVID-19 vaccine Bangavax", "Bangladesh’s first homegrown vaccine has received approval from the BMRC for human trials.")}
            {newsArticle("Ashwin on spree", "Indian spinner Ravichandran Ashwin became India's third-highest wicket-taker in Test cricket.")}
            {newsArticle("2021: The year UPI became the undisputed payments champion", "As of November 2021, the Unified Payments Interface had seen its transaction value surge 103% over 2020. And that steady clip is likely to continue into 2022.")}

            
        </div>
    )
}

export default Widgets
