import React, { Fragment } from 'react'

import './dashboard.css'
import DonutChart from '../DonutChart/DonutChart'

const Dashboard = () => (
  <Fragment>
    <div className="widget">
      <DonutChart value={457} maxValue={700} size={342} strokewidth={8} />
    </div>
  </Fragment>
)

export default Dashboard
