import React, {useEffect} from 'react';
import CollectionOverview from '../../Components/Collection-overview/collection-overview.component'
import CategoryPage from '../Category/category.pages'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectisShopDataExisting} from '../../redux/collections/collections.selectors'
import WithSpinner from '../../Components/With-spinner/with-spinner.component'
import {fetchCollectionStart} from '../../redux/collections/collections.actions'

const  ShopPage=({fetchCollectionStart,isLoading,match})=>{

    useEffect(()=>{
        fetchCollectionStart()
    },[fetchCollectionStart])
        
        const CollectionsOverViewWithSpinner=WithSpinner(CollectionOverview);
        const CategoryOverViewWithSpinner=WithSpinner(CategoryPage);
        console.log(isLoading);
        return(
        <div className='shop-page'>
        
        <Route exact render={(props)=>
             <CollectionsOverViewWithSpinner isLoading= {!isLoading} {...props}/>
         } 
         path={`${match.path}`} />
        <Route exact path={`${match.path}/:categoryId`} render={ (props)=> 
            <CategoryOverViewWithSpinner isLoading= {!isLoading} {...props}/>
        }/>
        </div>
        )
    }

const mapDispatchToProps=dispatch=>({
    fetchCollectionStart:()=>{dispatch(fetchCollectionStart())}
})

const mapStateToProps=createStructuredSelector({
    isLoading:selectisShopDataExisting
})
export default connect(mapStateToProps,mapDispatchToProps) (ShopPage);