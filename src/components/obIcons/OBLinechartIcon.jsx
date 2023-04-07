import React from 'react'
import Icon from './OBIcon'

export default function OBLinechartIcon({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19H3.1l-1-.1a1 1 0 0 1-.5-.4l-.1-1.1V1m18 4-5.4 5.4-.4.4h-.4l-.4-.4-1.8-1.8-.4-.4h-.4l-.4.4L5.5 13m14-8h-4m4 0v4"/>
    </Icon>
  )
}
