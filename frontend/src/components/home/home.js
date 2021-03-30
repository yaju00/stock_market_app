import React,{Component} from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import { Visibility } from 'semantic-ui-react';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            statusChanger:true,
        }
    }
    statusChanger=()=>{
        this.setState({statusChanger:false})
    }

    render(){
        return (
            <div style={{visibility:this.state.statusChanger?'visible':'hidden'}} className="container text-center">
             <button onClick={this.statusChanger} id={styles["button"]} type="button"  className="btn btn-primary">
             <Link style={{color:"white"}} to='/home'>Go to Home</Link>
             </button>
            </div>
        )
    }
   
}

export default Home; 