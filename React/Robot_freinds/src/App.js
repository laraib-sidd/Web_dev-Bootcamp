import React,{Component} from 'react';
import CardList from './CardList'
import { robots } from './robots';
import  SearchBox from './SearchBox'


class App extends Component {
    constructor(){
        super();
        this.state = {
        robots : robots,
        searchfield : ''
        }
    }
    onSearchChange = (event) =>{
    this.setState({searchfield :event.target.value})
    }

    render()
    {
    const filter_robots =
    this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(
        <div className="tc">
        <h1>My RobotFriends</h1>
        <SearchBox searchchange={this.onSearchChange} />
        <CardList robots = {filter_robots}/>
        </div>
        );
    }
}

export default App;