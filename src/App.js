import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Heading from './Heading';
import HeadingForm from './HeadingForm';

class App extends Component {
  state = {
    characters: [],
    data: [],
    myname: [],
  };

  removeCharacter = index => {
    const { characters } = this.state;
  
    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      }),
    })
  }  

  componentDidMount(){
    const url="https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

    fetch(url)
      .then(result => result.json())
      .then(result =>  {
        this.setState({
          data:result
        })
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return (
      <div className="container">
        <Heading myname={this.state.myname} />
        <HeadingForm handleHeadingSubmit={this.handleHeadingSubmit} />
        <Table 
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit}/>
        <br></br>
        <ul>{result}</ul>
      </div>
    );
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  handleHeadingSubmit = name => {
    this.setState({myname: [name.myname]});
  }
}

export default App;
