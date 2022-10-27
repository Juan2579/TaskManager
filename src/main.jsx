import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App/App'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './index.css'

function App(props){
  return (
    <h1>!{props.saludo}, {props.nombre}</h1>
  )
}

function withWhatever(WrappedComponent){
  return function ComponenteDeVerdad (props){
    return (
      <>
        <WrappedComponent {...props}/>
        <p>Estamos acompañando al WrappedComponent</p>
      </>
    )
  }
}

const AppWithWhatever = withWhatever(App)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AppWithWhatever saludo="Buenas" nombre="Juan" />
    <Footer />
  </React.StrictMode>
);

