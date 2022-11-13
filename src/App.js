import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log('Change!')}}></input>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}
const Cat = () => {
  return <div>Melow</div>
}

export default App;
