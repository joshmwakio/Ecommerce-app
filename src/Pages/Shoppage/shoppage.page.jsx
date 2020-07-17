import React from 'react';
import CollectionOverview from '../../Components/Collection-overview/collection-overview.component'
import CategoryPage from '../Category/category.pages'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectisCollectionFetching} from '../../redux/collections/collections.selectors'
import WithSpinner from '../../Components/With-spinner/with-spinner.component'
import {fetchCollectionAsync} from '../../redux/collections/collections.actions'

class ShopPage extends React.Component{
    state={loading:true}

    unsubscribeFromSnapshot=null;
    

    // componentDidCatch(){
    //     const {fetchCollectionAsync}=this.props;
    //     fetchCollectionAsync();
    // }
    componentWillMount(){
        const {fetchCollectionAsync}=this.props;
        fetchCollectionAsync();
    }
    componentDidMount(){
        const {fetchCollectionAsync}=this.props;
        fetchCollectionAsync();
    }
    render(){
        const {match,isLoading}=this.props;
        const CollectionsOverViewWithSpinner=WithSpinner(CollectionOverview);
        const CategoryOverViewWithSpinner=WithSpinner(CategoryPage);
        console.log(isLoading);
        return(
        <div className='shop-page'>
        
        <Route exact render={(props)=> 

            <CollectionsOverViewWithSpinner isLoading= {isLoading} {...props}/>
         } 
         path={`${match.path}`} />
        <Route path={`${match.path}/:categoryId`} render={
            (props)=> 
            <CategoryOverViewWithSpinner isLoading= {isLoading} {...props}/>
        }/>
        </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    fetchCollectionAsync:()=>{dispatch(fetchCollectionAsync())}
})

const mapStateToProps=createStructuredSelector({
    isLoading:selectisCollectionFetching
})
export default connect(mapStateToProps,mapDispatchToProps) (ShopPage);