/* eslint no-console:0 */
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import './donutChart.css'

const MAX_STEPS = 60

class DonutChart extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
  }

  componentWillMount() {
    this.playSequence(0)
  }

  componentWillUnmount() {
    this.setState({ value:0 })
  }

  playSequence(step) {
    if (step < MAX_STEPS) {
      setTimeout(this.nextStep, 16.7, step + 1)
    } else {
      console.log('sequence complete')
    }
  }

  nextStep = step => {
    const value = this.easeOutBounce(step, 0, this.props.value, MAX_STEPS)
    this.setState({ value })
    this.playSequence(step)
  }

  /*
  linear = (t, b, c, d) => {
    return c*t/d + b;
  }*/

  easeOutBounce = (t, b, c, d) => {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
    }
  }

  render() {
    const halfsize = this.props.size * 0.5
    const radius = halfsize - this.props.strokewidth * 0.5
    const percentage = this.state.value / this.props.maxValue * 100
    const dash = this.state.value / this.props.maxValue  * 1050
    const strokeDasharray = `${dash} 2000`;

    const indicatorstyle = { strokeWidth: this.props.strokewidth, strokeDasharray: strokeDasharray }
    const transform = 'rotate(-90 ' + halfsize + ',' + halfsize + ')'
    const overlayStyle = {width:this.props.size, height:this.props.size}

    return (
      <Fragment>
        <div id="blur" className='donutchart-overlay' style={overlayStyle} />
        <div className="donutchart">
          <div className='donutchart-dashboard'>
            <div className="donutchart-text-title">Your credit score is</div>
            <div className="donutchart-text-val">{parseInt(this.state.value)}</div>
            <div className="donutchart-text-out-of">{' out of ' + this.props.maxValue}</div>
            <div className="donutchart-text-percent">{parseInt(percentage)+'%'}</div>
          </div>
          <svg width={this.props.size} height={this.props.size} xmlns="http://www.w3.org/2000/svg" >
            <circle
              className="donutchart-progress"
              r={radius}
              cx={halfsize}
              cy={halfsize}
              transform={transform}
              style={indicatorstyle}
            />
          </svg>
        </div>
      </Fragment>
    )
  }
}

DonutChart.propTypes = {
  value: PropTypes.number, // value the chart should show
  maxValue: PropTypes.number, // value the chart should show
  size: PropTypes.number, // diameter of chart
  strokewidth: PropTypes.number // width of chart line
}

DonutChart.defaultProps = {
  value: 0,
  maxValue: 100,
  size: 342,
  strokewidth: 4
}

export default DonutChart
