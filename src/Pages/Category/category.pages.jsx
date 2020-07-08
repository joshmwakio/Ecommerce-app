import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCategory} from '../../redux/collections/collections.selectors'
import CollectionItem from '../../Components/Collection-item/collection-item.component'
import './category.styles.scss'

const CategoryPage=({match,collection})=>{
    console.log(collection)
    const {title, items}=collection
return(
    <div className='category-page'>
    <h2 className='title'>{title} </h2>
    <div className='items'>
        {
            items.map(item=><CollectionItem key={item.id} item={item}/>)
        }
    </div>
    </div>
)
}

const mapStateToProps=(state,ownProps)=>({
    collection:selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);