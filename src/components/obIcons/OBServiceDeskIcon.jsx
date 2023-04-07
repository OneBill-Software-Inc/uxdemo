import React from 'react'
import Icon from './OBIcon'

export default function OBServiceDeskIcon({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
      <g opacity="0.2" className={fill ?? 'fill-primary'}>
        <path d="M5.5 15.5C5.5 14.1193 6.61929 13 8 13C9.38071 13 10.5 14.1193 10.5 15.5V18.5C10.5 19.8807 9.38071 21 8 21C6.61929 21 5.5 19.8807 5.5 18.5V15.5Z" />
        <path d="M14.5 15.5C14.5 14.1193 15.6193 13 17 13C18.3807 13 19.5 14.1193 19.5 15.5V18.5C19.5 19.8807 18.3807 21 17 21C15.6193 21 14.5 19.8807 14.5 18.5V15.5Z" />
      </g>
      <path
        d="M22.5 17V13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13V17M8 21C6.61929 21 5.5 19.8807 5.5 18.5V15.5C5.5 14.1193 6.61929 13 8 13C9.38071 13 10.5 14.1193 10.5 15.5V18.5C10.5 19.8807 9.38071 21 8 21ZM17 21C15.6193 21 14.5 19.8807 14.5 18.5V15.5C14.5 14.1193 15.6193 13 17 13C18.3807 13 19.5 14.1193 19.5 15.5V18.5C19.5 19.8807 18.3807 21 17 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}
