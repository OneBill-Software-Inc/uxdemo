
import React from 'react'
import Icon from './OBIcon'

export default function OBHelpcircleIcon({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
     <path opacity="0.2" className={fill ?? 'fill-primary'}  d="M12 22.5a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
     <path strokeLinecap="round" strokeLinejoin="round"d="M9 9.5a3 3 0 0 1 6 1c0 2-3 3-3 3m0 4h0m10-5a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"/>
     </Icon>
  )
}
