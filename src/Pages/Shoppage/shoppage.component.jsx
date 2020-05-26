import React from 'react';
import Shopdata from './shoppage.data.js';
import CollectionPreview from '../../Components/Collection-preview/collection-preview.component';
class ShopPage extends React.Component{
    constructor(props){
        super()
        this.state={
            collections:Shopdata
        }
    }
    render(){
        const {collections}=this.state;
        return ( 
        <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
        </div>
        )
    }
}
export default ShopPage;