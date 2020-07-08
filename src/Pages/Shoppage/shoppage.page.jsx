import React from 'react';
import CollectionOverview from '../../Components/Collection-overview/collection-overview.component'
import CategoryPage from '../Category/category.pages'
import {Route} from 'react-router-dom'

const ShopPage=({match})=>(
    <div className='shop-page'>
        <Route exact component= {CollectionOverview} path={`${match.path}`} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
</div>
)

export default ShopPage;