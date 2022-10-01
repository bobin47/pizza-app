import React from 'react'
import "../css/commonSection.css"
import {Container} from 'reactstrap'

export default function CommonSection(props) {
  return (
  <section className='common__section'>
    <Container>
        <h2>{props.title}</h2>
    </Container>
  </section>
  )
}
