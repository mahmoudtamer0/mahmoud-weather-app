import React from 'react'


const Weather = (props) => {
    return (
        <div className='info'>
            {props.temp && <p className='info-key'>Temp:
                <span className='info-value'>{Math.ceil(props.temp - 273.15)} <sup><sup>o</sup>c</sup></span></p>}
            {props.city && <p className='info-key'>City:
                <span className='info-value'>{props.city}</span></p>}
            {props.country && <p className='info-key'>Country:
                <span className='info-value'>{props.country}</span></p>}
            {props.humidity && <p className='info-key'>Humidity:
                <span className='info-value'>{props.humidity}</span></p>}
            {props.desc && <p className='info-key'>Description:
                <span className='info-value'>{props.desc}</span></p>}
            {props.error && <p className='info-key'><span className='info-value'>{props.error}</span></p>}
        </div>
    )
}

export default Weather;