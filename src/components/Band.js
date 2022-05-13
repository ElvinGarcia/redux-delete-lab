import React from 'react'


const Band = (props) => {
  return(
   <div>
      <li>{props.name}</li>
      <button onClick={()=> props.deleteBand(props.id) }>delete</button>
    </div>
  )
}

export default Band ;

