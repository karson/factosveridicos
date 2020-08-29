import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Centro from './componentes/Centro';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Centro />
      </BrowserRouter>
    );
  }
}

export default Main;
