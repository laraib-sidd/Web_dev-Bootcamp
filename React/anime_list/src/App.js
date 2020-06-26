import React from 'react';
import CardList from './CardList'
import { robots } from './robots';

const App = (robots) => {
    return(
        <CardList robots = {robots}/>
    )
}

export default App;