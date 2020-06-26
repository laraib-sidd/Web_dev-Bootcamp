import React from 'react';
import CardList from './CardList'
import { robots } from './robots';
import  SearchBox from './SearchBox'

const App = () => {
    return(
        <div>
        <h1>My RobotFriends</h1>
        <SearchBox />
        <CardList robots = {robots}/>
        </div>
    )
}

export default App;