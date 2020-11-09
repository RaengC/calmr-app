import React, { Component } from 'react'
//
// class optionsMarkup extends Component {
//   constructor(options) {
//     super(options)
//     this.state = {
//       url: ''
//     }
//     this._handleClick = this._handleClick.bind(this)
//   }
//  _handleClick(event){
//     console.log("clicked")
//   }
//   render(options){
//     return(
//       <div>
//       {options.map((option) => (
//         <li key={option.id} className="link-list">
//           <a
//             onClick={this._handleClick}
//             href={option.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="link-list-item-url"
//           >
//             {option.text}
//           </a>
//         </li>
//       ))}
//         </div>
//         )
//
//
//   }
//   }
//
const state = {
  url: ''
}
const _handleClick = (event) => {
  console.log(event.target.href)
}

const optionsMarkup = (options) => options.map((option) => (
  <li key={option.id} className="link-list">
    <a
      href={option.url}
      onClick={_handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="link-list-item-url"
    >
      {option.text}
    </a>
  </li>
  )
);

export default optionsMarkup;
