import React from 'react'

export default function Helmet(props) {
    document.title = "Food ordering app - " + props.title
  return (
    <div>{props.title}</div>
  )
}
