import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

function App (state =
{countries: [{name: 'Germany', id: 1}, {name: 'France', id: 2}, {name: 'Italy', id: 3}, {name: 'Spain', id: 4}, {name: 'Norway', id: 5}, {name: 'Hungary', id: 6}], 
capitals: [{name: 'Berlin', id: 1}, {name: 'Paris', id: 2}, {name: 'Rome', id: 3}, {name: 'Madrid', id: 4}, {name: 'Oslo', id: 5}, {name: 'Budapest', id: 6}]}, action){
        return state;
}
const store = createStore(App);

store.subscribe(() => {
    console.log('subscribe', store.getState())
})

store.dispatch({'type': 'MIX_COUNTRIES', payload: 'hi!'})
/*
создать компонент quiz_country <div style = {quiz_countries__country} onClick={onCountryClick} id = '1'>Germany</div>
создать компонент quiz_capital
вынести в default state вынести туда массив стран и столиц
добавить map() пробежаться с помощью него по странам и столицам, вынести их

*/

//let countryOnClick = App.state.countries;
//let capitalOnClick = App.state.capitals;
//
//function onCapitalClick (event) {
//    event.currentTarget.style.backgroundColor = '#ccc';
//    capitalOnClick = event.currentTarget.id;            
//};
//function onCountryClick (event) {
//    event.currentTarget.style.backgroundColor = '#fc1';            
//    countryOnClick = event.currentTarget.id;  
//    if(countryOnClick === capitalOnClick){
//       alert ('Right');
//       event.currentTarget.style.display = 'none';
//    }else{
//        alert('Wrong');
//        event.currentTarget.style.display = 'visible';
//    }
//}

//class App extends React.Component{
//    static defaultPrors() {
//        return {
//            countries: this.state.countries, 
//            capitals: this.state.capitals
//        }
//    }
//    state = {
//       countries: [{name: 'Germany', id: 1}, {name: 'France', id: 2}, {name: 'Italy', id: 3}, {name: 'Spain', id: 4}, {name: 'Norway', id: 5}, {name: 'Hungary', id: 6}],
//       capitals: [{name: 'Berlin', id: 1}, {name: 'Paris', id: 2}, {name: 'Rome', id: 3}, {name: 'Madrid', id: 4}, {name: 'Oslo', id: 5}, {name: 'Budapest', id: 6}],
//        countryId: null,
//        capitalId: null
//    }
//    render(){
////        let isSelected = (countries.id === capitals.id);
////        let style = {
////            'background-color': '',
////            'display': ''
////        };
//        return (
//          <div className = 'quiz_wrapper'>
//            <div className = 'quiz'>
//              {this.state.capitals.map((capital)=> {
//               return (
//                     <Capital className = 'quiz_capitals quiz' name={capital.name} id={capital.id} key = {capital.id}/>
//                )
//             })}
//            </div>
//            <div className = 'quiz'>
//             {this.state.countries.map((country)=> {
//               return (
//                     <Country className = 'quiz_countries quiz' name={country.name} id={country.id}  key = {country.id}/>
//                ) 
//             })}
//            </div>
//        </div>
//       )
//    }
//}
//
//class Country extends React.Component { 
//  render() {
//    return (
//        <div className = 'quiz_countries__country' data-id = {this.props.id}>{this.props.name}</div>
//    )
//  }
//}
//
//class Capital extends React.Component {
//  render() {
//    return (
//        <div className = 'quiz_capitals__capital' data-id = {this.props.id}>{this.props.name}</div>
//    )
//  }
//}

export default App;
