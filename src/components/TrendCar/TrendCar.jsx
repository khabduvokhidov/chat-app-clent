import React from 'react'
import { TrendData} from "../../Data/TrendData"

import "./trendCard.css"

export default function TrendCar() {
  return (
    <div className='trend-car'>
        <h3>Trends for your</h3>
        {
            TrendData.map((trend, i)=> {
                return(
                  <div className="trend" key={i}>
                    <span>@{trend.name}</span>
                    <span>{trend.shares}k shares</span>

                  </div>
                )
            })
        }
    </div>
  )
}
