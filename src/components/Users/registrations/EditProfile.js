import React, { Component } from 'react';
import axios from 'axios'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        age: '',
        gender : '',
        image :''

    }
    this.handleSubmit=this.handleSubmit.bind(this)
}
handleSubmit=(event) =>{
  event.preventDefault();
  debugger;
}
  render () {
    if(!this.props.user){return ""}
    const {age , gender, image} = this.state
    return (
     <div>
      <h3>Update Profile</h3>
         <form onSubmit={this.handleSubmit}>
            <input
              placeholder="name"
              type="text"
              name="name"
              value={this.props.user.name}
            />
          <br/>
            <input
              placeholder="email"
              type="text"
              name="email"
              value={this.props.user.email}

            />
          <br/>
            <input
              placeholder="age"
              type="text"
              name="age"
              value=""
            />
            <br/>
              <input
                placeholder="gender"
                type="text"
                name="gender"
                value=""
              />
              <br/>
                <input
                  placeholder="image"
                  type="text"
                  name="image"
                  value=""
                />



          <br/>
            <button placeholder="submit" type="submit">
              Update
            </button>
          </form>
      </div>
    )
  }

}
export default EditProfile;
