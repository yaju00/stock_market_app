import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';


class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <nav id={styles["nav"]} className="navbar navbar-expand-lg">
              <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <p className={styles.title}>Quikie</p>
                    <p className={styles.subtitle}>Apps</p>
                    </li>
                </ul>
              </div>
            </nav>
        )
    }
}

export default Navbar;