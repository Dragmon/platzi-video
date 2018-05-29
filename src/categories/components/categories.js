/**
 * Created by dragmon on 02/05/18.
 */
import React from 'react';
import Category from'./category';
import '../../playlist/css/categories.css';
import Search from '../../widget/containers/search';

function Categories(props) {
    return(
        <div className="Categories">
            <Search />
            {
                props.categories.map((item) =>{
                    return (
                        <Category
                            key={item.id}
                            {...item}
                            handleOpenModal={props.handleOpenModal}

                        />
                    )
                })
            }
        </div>
    )
}

export default Categories;