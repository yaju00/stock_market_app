import React from 'react';
import { PaginationItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './pagination.module.css';


const Pagination=(props)=>{

    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(props.totalPosts/props.postsPerPage);i++){
        pageNumbers.push(i);
    }

    return(
        <div className="container">
            <ul  id={styles["mainDiv"]} className="pagination">
                {pageNumbers.map(num=>{
                    return <li key={num} className="page-item">
                        <Link onClick={()=>props.paginate(num)} to='/home' className="nav-link">
                            {num}
                        </Link>
                    </li>
                })}

            </ul>
            
        </div>
    )
}

export default Pagination;