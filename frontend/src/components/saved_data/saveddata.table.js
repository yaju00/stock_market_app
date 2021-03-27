import react,{Component} from 'react';
import axios from 'axios';
import styles from './saveddata.module.css'

class SavedData extends Component{

    constructor(props){
        super(props)
        this.state={
            companiesList:[],
        }
        
    }
     componentDidMount(){
         axios.get(`http://localhost:5000/view`)
         .then(res=>{  
           this.setState({companiesList:res.data})
         })
         .catch(err=>err)
     }

     deleteData=(element)=>{
      axios.delete(`http://localhost:5000/view`,element)
     }
    render(){
        return(
            
            <div className="container text-center" id={styles["stocktable"]}>
                <div id={styles["top"]} className="container text-center">
                    <div className="row">
                        <div className="col-sm-4">
                        <h2 className={styles.heading}>Saved Data</h2> 
                        </div>    
                    </div>
                </div>
                <div className="container text-center" id={styles["tableHead"]}>
                    <div className="row" >
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
                {this.state.companiesList.map((el,index)=>{
                    return <div  className="container text-center" id={styles["tableLine"]}>
                    <div className="row ">
                    <div className="col-sm-4">
                    {el.name}
                    </div>
                    <div className="col-sm-2">
                        {el.symbol}
                    </div>
                    <div className="col-sm-2">
                    {el.stock}
                    </div>
                    <div className="col-sm-2">
                        <button
                        onClick={()=>this.deleteData(el)}
                        id={styles["button"]} type="submit" 
                        className="btn btn-primary">
                        Delete
                        </button>
                    </div>
                    <div className="col-sm-2">
                    {el.country}
                    </div>
                </div>
            </div> 

                })}
        </div>
           
        
            
        )  
    }
   
     
}

export default SavedData;

