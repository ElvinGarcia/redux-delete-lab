import React from 'react'


const Band = (props) => {
  return(
   <div>
      <li key={props.id}>{props.name}</li>
      <button onClick={()=> props.deleteBand(props.id) }>DELETE</button>
    </div>
  )
}

export default Band ;

// import React, { Component } from 'react';

// class Band extends Component {

//   handleOnClick = () => {
//     this.props.deleteBand(this.props.id)
//   }

//   render() {
//     return(
//       <div>
//         <li>{this.props.name}</li>
//         <button onClick={this.handleOnClick}>
//           Delete
//         </button>
//       </div>
//     )
//   }
// };

// export default Band;