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
    color: 'blue',
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
countryArray = [];

class Country extends React.Component {
    quiz_country <div style = {quiz_countries__country} onClick={onCountryClick} id = '1' name = 'Germany'></div>
    quiz_country <div style = {quiz_countries__country} onClick={onCountryClick} id = '2' name = 'France'></div>
    quiz_country <div style = {quiz_countries__country} onClick={onCountryClick} id = '3' name = 'UK'></div>
    quiz_country <div style = {quiz_countries__country} onClick={onCountryClick} id = '4' name = 'Netherlands'></div>
    quiz_country <div style = {quiz_countries__country} onClick={onCountryClick} id = '5' name = 'Italy'></div>
    quiz_country <div style = {quiz_countries__country} onClick={onCountryClick} id = '6' name = 'Spain'></div>
  render() {
    return (
        <div style = {quiz_countries}>
            <div>{quiz_country.props.name}</div>
            <Capital/>
        </div>   
    );
  }
}

class Capital extends React.Component {
    quiz_capital <div style = {quiz_capitals__capital} onClick={onCapitalClick} id = '1' name = 'Berlin'></div>
    quiz_capital <div style = {quiz_capitals__capital} onClick={onCapitalClick} id = '2' name = 'Paris'></div>
    quiz_capital <div style = {quiz_capitals__capital} onClick={onCapitalClick} id = '3' name = 'London'></div>
    quiz_capital <div style = {quiz_capitals__capital} onClick={onCapitalClick} id = '4' name = 'Amsterdam'></div>
    quiz_capital <div style = {quiz_capitals__capital} onClick={onCapitalClick} id = '5' name = 'Rome'></div>
    quiz_capital <div style = {quiz_capitals__capital} onClick={onCapitalClick} id = '6' name = 'Madrid'></div>
  render() {
    return (
        <div style = {quiz_capitals}>
            <div>{quiz_capital.props.name}</div>
        </div>
    );
  }
  function getInitialState(){
      const capitalItems = [this.props.name];
      const mappedCapitalArray = capitalArray.map((capitalItem) =>
  <li>{number}</li>
  }
}
export default Country;