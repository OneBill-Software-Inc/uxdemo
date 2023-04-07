import React from 'react'
import Icon from './OBIcon'

export default function OBClapperboard({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
     <g>
       <path opacity="0.2" className={fill ?? 'fill-primary'} d="M2.5 7.8c0-1.7 0-2.5.3-3.2.3-.5.8-1 1.3-1.3C4.8 3 5.6 3 7.3 3h10.4c1.7 0 2.5 0 3.2.3.5.3 1 .8 1.3 1.3.3.7.3 1.5.3 3.2V8h-20v-.2Z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 3-1 5m8-5-1 5m7 0h-20M8 21h9.7c1.7 0 2.5 0 3.2-.3a3 3 0 0 0 1.3-1.3c.3-.7.3-1.5.3-3.2V7.8c0-1.7 0-2.5-.3-3.2a3 3 0 0 0-1.3-1.3c-.7-.3-1.5-.3-3.2-.3H7.3c-1.7 0-2.5 0-3.2.3a3 3 0 0 0-1.3 1.3c-.3.7-.3 1.5-.3 3.2v8.4c0 1.7 0 2.5.3 3.2.3.5.8 1 1.3 1.3.6.2 1.2.3 2.4.3M8 21H6.5M8 21H6.5"/>
       <path d="M18 20.5a5.5 5.5 0 1 0-11 .2l5.6-.1 5.5-.1Z"/>
       <mask id="b">
       <path d="M7.3 21a5.5 5.5 0 1 1 10.6 0l-1.3-.4a4.1 4.1 0 1 0-8 0l-1.3.4Z"/>
       </mask>
       <path opacity="0.2" className={fill ?? 'fill-primary'}  d="M7.3 21a5.5 5.5 0 1 1 10.6 0l-1.3-.4a4.1 4.1 0 1 0-8 0l-1.3.4Z"/>
      </g>
    </Icon>
  )
}
