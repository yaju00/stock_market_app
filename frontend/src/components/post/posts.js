import React,{Component} from 'react';
import styles from './posts.module.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Posts extends Component{

    constructor(props){
        super(props)
    }


    render(){
        if(this.props.loading){
            return <h2 style={{textAlign:'center'}}>Loading...</h2>
        }

      else{ return(
       <div className="container" id={styles["stocktable"]}>
       <div id={styles["top"]} className="container text-center">
         <div className="row">
            <div className="col-sm-4">
               <h2 className={styles.heading}>Stock Details Table</h2> 
            </div>
            <div className="col-sm-4">
               <button  type="submit"><FaSearch/></button>
               <input onChange={(event)=>this.props.filter(event)} type="text" placeholder="...search"/>
           </div>     
         </div>
       </div>
       
      <div className="container text-center" id={styles["tableHead"]}>
           <div className="row">
               <div className="col-sm-4">
               Company Name
               </div>
               <div className="col-sm-2">
               Symbol
               </div>
               <div className="col-sm-2">
               Exchange
               </div>
               <div className="col-sm-2">
               </div>
               <div className="col-sm-2">
               Country
               </div>
           </div>
       </div>
       {this.props.posts.map((el,index)=>{
         if(this.props.show[index]===true){
             if(this.props.viewState[index]===true){
                return <div  className="container text-center" id={styles["tableLine"]}>
                <div className="row ">
                  <div className="col-sm-4">
                   {el.name}
                  </div>
                  <div className="col-sm-2">
                    {el.symbol}
                  </div>
                  <div className="col-sm-2">
                  {el.stock_exchange.acronym}
                  </div>
                  <div className="col-sm-2">
                  <button 
                  onClick={()=>this.props.statusChanger(el)}
                  key={el.name}
                  id={styles["button"]} type="submit" 
                  className="btn btn-primary">Save</button>
                  </div>
                  <div className="col-sm-2">
                  {el.stock_exchange.country}
                  </div>
              </div>
          </div> 
             }
            else{
                return <div  className="container text-center" id={styles["tableLine"]}>
                <div className="row ">
                  <div className="col-sm-4">
                   {el.name}
                  </div>
                  <div className="col-sm-2">
                    {el.symbol}
                  </div>
                  <div className="col-sm-2">
                  {el.stock_exchange.acronym}
                  </div>
                  <div className="col-sm-2">
                  <button
                  id={styles["buttonView"]} type="submit" 
                  className="btn btn-primary">
                      <Link style={{color:"white"}} to='/view'>View</Link>
                  </button>
                  </div>
                  <div className="col-sm-2">
                  {el.stock_exchange.country}
                  </div>
              </div>
          </div> 
             }
              
           } 
       })}
       
    </div>
       )
    }
    }
   
}

export default Posts;