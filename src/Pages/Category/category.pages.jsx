import React from 'react';
import {connect} from 'react-redux';
import {selectCategory} from '../../redux/collections/collections.selectors'
import CollectionItem from '../../Components/Collection-item/collection-item.component'
import './category.styles.scss'

import {CategoryPageContainer,ItemsContainer,TitleContainer} from './category.styles'
const CategoryPage=({collection})=>{
    console.log(collection)
    const {title, items}=collection
return(
    <CategoryPageContainer>
      <TitleContainer> {title} </TitleContainer>
        <ItemsContainer>
        {
            items.map(item=><CollectionItem key={item.id} item={item}/>)
        }
       </ItemsContainer>
    </CategoryPageContainer>
)
}

const mapStateToProps=(state,ownProps)=>({
    collection:selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);