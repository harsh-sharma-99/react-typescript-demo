import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
const Status = (props: StatusProps) => {
    let message ;
    
    switch (props.status) {
        case "loading":
            message = "Loading..."
            break;
        case "success":
            message = "Data fetched successfully..."
            break;
        case "error":
            message = "Error..."
            break;
    
        default:
            break;
    }

  return (
    <div>Status - {message}</div>
  )
}

export default Status