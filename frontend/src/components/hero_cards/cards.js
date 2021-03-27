import React,{Component} from 'react';
import styles from './cards.module.css';
import img1 from '../../assets/AMZN.svg'
import img2 from '../../assets/FB.png';
import img3 from '../../assets/GOOGL.png';
import { Button, Card, Image, Visibility } from 'semantic-ui-react';    
import axios from 'axios';


class Cards extends Component{
   constructor(props){
       super(props)
           this.state={
               symbol:['AMZN','FB','GOOGL'],
               img:[img1,img2,img3],
               stockPrice:[],
               companyName:['AMAZON','FACEBOOK','GOOGLE'],
               stockPriceVisibility:false,
           }   
   }

   componentDidMount(){
    let inter=[...this.state.stockPrice];
       this.state.symbol.map((el,index)=>{
           axios.get(`http://api.marketstack.com/v1/eod?access_key=08fa642e2d0a858a4425f8bd20ddecab&symbols=${el}`).then(res=>{
               this.state.stockPrice.push(res.data.data[0].high)
               return res;
            }).then(res=>this.setState({stockPriceVisibility:true}))
           
       })
       
   }
   render(){
       return(
           <div>
               <div className="container">
                    <div className="row">
                    {
                        this.state.img.map((el,index)=>{
                        return <div className="col-sm-4" >
                            <div id={styles["card"]} className="card">
                                <img id={styles["cardImg"]} className="image" src={el}/>
                                <p>{this.state.symbol[index]}</p>
                                <div className={styles.division}> <p style={{visibility:this.state.stockPriceVisibility?'visible':'hidden'}}>{Math.floor(this.state.stockPrice[index])+' '+`USD`}</p></div>
                            </div>
                        </div>
                        })
                    }
                    </div>
                </div>
            
           </div>
       )
   }
}


export  default Cards;



