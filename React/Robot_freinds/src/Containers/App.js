import React,{Component} from 'react';
import CardList from '../Components/CardList'
// import { robots } from './robots';
import Scroll from '../Components/Scroll'
import  SearchBox from '../Components/SearchBox'
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
        robots : [],
        searchfield : ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
    }
    onSearchChange = (event) =>{
    this.setState({searchfield :event.target.value})
    }

    render()
    {
    const filter_robots =
    this.state.robots.filter(robot =>{
        return robot.name.toLowerCase()
        .includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots.length === 0){
        return <h1 className="tc">Loading</h1>
    }
    else{
    return(
        <div className="tc">
        <h1 className=''>My RobotFriends</h1>
        <SearchBox searchchange={this.onSearchChange} />
        <Scroll>
            <CardList robots = {filter_robots}/>
        </Scroll>
        </div>
        );
        }
    }
}

export default App;
