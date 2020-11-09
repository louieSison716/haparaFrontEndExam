import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/header/Index';

// Header
const element  = document.getElementById('root');
if  (typeof(element) != 'undefined' && element != null){

  ReactDOM.render((
  	<>
      <Header />
    </>
  ), element);
}