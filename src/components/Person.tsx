import React from 'react'

type PersonProps = {
    name:{
        firstName: string
        lastName: string
    }
}
const Person = (props: PersonProps) => {
  return (
    <div>
        <h6>{props.name.firstName}----{props.name.lastName}</h6>
    </div>
  )
}

export default Person