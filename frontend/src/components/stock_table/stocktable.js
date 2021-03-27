import React,{Component} from 'react';
import axios from 'axios';
import styles from './stocktable.module.css';
import { FaSearch } from 'react-icons/fa';
import Posts from '../post/posts';
import Pagination from '../pagination/pagination'; 


class StockTable extends Component{
    constructor(props){
        super(props)
        this.state={
            companiesList:[],
            loading:true,
            show:[],
            totalPosts:0,
            currentPage:1,
            postsPerPage:5,
            indexOfFirstPost:0,
            indexOfLastPost:5,
            viewState:[],
        }
    }
 componentDidMount(){
    axios.get('http://api.marketstack.com/v1/tickers?access_key=08fa642e2d0a858a4425f8bd20ddecab')
    .then(res=> {
        if(res){
          this.setState({companiesList:res.data.data})
        }
        
        return res
    })
    .then(res=>{
        const inter=[...this.state.show]
        this.state.companiesList.map((el,index)=>{
          inter[index]=true;
        })
        this.setState({show:inter});
        this.setState({viewState:inter})
        this.setState({loading:false});
        this.setState({totalPosts:inter.length})
        
    })
   .catch(err=>console.log(err))
 }

 filter=(event)=>{
     let inter=event.target.value.toLowerCase().trim();
     let copiedResults=[...this.state.companiesList]
     let copiedShow=[...this.state.show];     
     copiedResults.map((el,index)=>{
        if(el.name.toLowerCase().includes(inter)){
            copiedShow[index]=true;
         }
         else{
            copiedShow[index]=false;
        }
    })
        this.setState({show:copiedShow})
  }

 paginate=(num)=>{
    let postsPerPage=this.state.postsPerPage;
    let lastIndex=num*postsPerPage;
    let firstIndex=lastIndex-postsPerPage;
     this.setState({currentPage:num})
     this.setState({indexOfLastPost:lastIndex})
     this.setState({indexOfFirstPost:firstIndex})
 }
 statusChanger=(element)=>{
     let index=0;
     let newArray=[...this.state.viewState];
     this.state.companiesList.map((el,ind)=>{
         if(el===element){
           newArray[ind]=false
         }
     })
     this.setState({viewState:newArray})
     axios.post(`http://localhost:5000/home`,element)
 }
 
 
    render(){
        
        return(
            <div className={styles.mainDiv}>
               <Posts 
               posts={this.state.companiesList.slice(this.state.indexOfFirstPost,this.state.indexOfLastPost)}
                loading={this.state.loading}
                filter= {this.filter} 
                show={this.state.show.slice(this.state.indexOfFirstPost,this.state.indexOfLastPost)}
                viewState={this.state.viewState.slice(this.state.indexOfFirstPost,this.state.indexOfLastPost)}
                statusChanger={this.statusChanger}/>
                <Pagination 
                totalPosts={this.state.totalPosts} 
                postsPerPage={this.state.postsPerPage}
                paginate={this.paginate} />
            </div>
            
        )
    }

}

export default StockTable;


