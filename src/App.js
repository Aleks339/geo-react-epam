import React from 'react';
import ReactDOM from 'react-dom';

const quiz = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '60px',
    justifyContent: 'space-around',
    cursor: 'pointer'
};
const quiz_capitals = {
    color: 'green'
};
const quiz_countries = {
    color: 'blue'
};
const quiz_capitals__capital = {
    padding: '15px',
    margin: '2px',
    border:'1px solid blue',
    cursor: 'pointer'
}
const quiz_countries__country = {
    padding: '15px',
    margin: '2px',
    border:'1px solid green',
    cursor: 'pointer'
}

let countryOnClick;
let capitalOnClick;

function onCapitalClick (event) {
    event.currentTarget.style.backgroundColor = '#ccc';
    capitalOnClick = event.currentTarget.id;            
};
function onCountryClick (event) {
    event.currentTarget.style.backgroundColor = '#fc1';            
    countryOnClick = event.currentTarget.id;  
    if(countryOnClick === capitalOnClick){
       alert ('Right');
       event.currentTarget.style.display = 'none';
    }else{
        alert('Wrong');
        event.currentTarget.style.display = 'visible';
    }
};
/*
создать компонент quiz_country <div style = {quiz_countries__country} onClick={onCountryClick} id = '1'>Germany</div>
создать компонент quiz_capital
вынести в default state вынести туда массив стран и столиц
добавить map() пробежаться с помощью него по странам и столицам, вынести их

*/

class App extends React.Component{
    static defaultPrors() {
        return {
            countries: this.state.countries, 
            capitals: this.state.capitals
        };
    }
    state = {
       countries: [{name: 'Germany', id: 1}, {name: 'France', id: 2}, {name: 'Italy', id: 3}],
       capitals: [{name: 'Berlin', id: 1}, {name: 'Paris', id: 2}, {name: 'Rome', id: 4}],
    }
    render(){
        return (
          <div>
              {this.state.countries.map(country=> ((n)createFragment ({
                    Country: <Country name={country.props.name} key={country.props.id} id={country.props.id} />,
                    Capital: <Capital name={capital.props.name} key={capital.props.id} id={capital.props.id} /> 
                )}
             })}
        </div>
       )
    }
}

class Country extends React.Component { 
  render() {
    return (
        <div style = {quiz_countries__country} onClick={onCountryClick} data-id = {this.props.id}>{this.props.name}</div>
    )
  }
}

class Capital extends React.Component {
  render() {
    return (
        <div style = {quiz_capitals__capital} onClick={onCapitalClick} data-id = {this.props.id}>{this.props.name}</div>
    )
  }
}
export default App;
