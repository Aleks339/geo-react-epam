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
       countries: [{name: 'Germany', id: 1}, {name: 'France', id: 2}, {name: 'Italy', id: 3}, {name: 'Spain', id: 4}, {name: 'Norway', id: 5}, {name: 'Hungary', id: 6}],
       capitals: [{name: 'Berlin', id: 1}, {name: 'Paris', id: 2}, {name: 'Rome', id: 3}, {name: 'Madrid', id: 4}, {name: 'Oslo', id: 5}, {name: 'Budapest', id: 6}],
    }
    render(){
        let countries = this.state.countries;
        let capitals = this.state.capitals;
        let ramdomCountry = countries[Math.floor(Math.random() * countries.length)];
        let ramdomCapital = capitals[Math.floor(Math.random() * capitals.length)];
        return (
          <div>
              {this.state.capitals.map((capital)=> {
               return (
                    <div>
                        <Capital name={capital.name} key={capital.id} id={capital.id}/>
                    </div>
                ) 
             })}
             {this.state.countries.map((country)=> {
               return (
                    <div>
                        <Country name={country.name} key={country.id} id={country.id} />
                    </div>
                ) 
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
