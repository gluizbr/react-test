//const heading = <h1 className="site-heading">Hello, React</h1>;
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

const name = 'Tania';
const Heading = () => <h1>Hello, {name}</h1> ;

class App extends Component {
  state = {
    characters : [],
    data: []
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
        <ul>{result}</ul>
        <Heading />
        <Table 
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }
}

export default App;

/*
{
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspiring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    }
*/