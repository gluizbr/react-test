import React, { Component } from 'react';

class HeadingForm extends Component {
  constructor(props){
    super(props);

    this.initialState = {
      myname: 'Who r u?'
    };
    this.state = this.initialState
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleHeadingSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { myname } = this.state

    return (
      <form>
        <input 
          type="text"
          name="myname"
          value={myname}
          onChange={this.handleChange} />
        <input
            type="button"
            value="Say Hi"
            onClick={this.submitForm} />
      </form>
    )
  }
}

export default HeadingForm