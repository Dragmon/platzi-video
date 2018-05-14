/**
 * Created by dragmon on 02/05/18.
 */
import React from 'react';
import Category from'./category';
import '../../playlist/css/categories.css';

function Categories(props) {
    return(
        <div className="Categories">
            {
                props.categories.map((item) =>{
                    return <Category key={item.id} {...item}/>
                })
            }
        </div>
    )
}

export default Categories;