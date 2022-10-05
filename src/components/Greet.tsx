import React from 'react'

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props;
  return (
    <div>
        {
        props.isLoggedIn?  <h1>Hey {props.name}, you have {messageCount} unread messages</h1>:<h1>Welcome Guest</h1>
        }   
    </div>
  )
}

export default Greet