import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCollectionForPreview} from '../../redux/collections/collections.selectors'
import CollectionPreview from '../Collection-preview/collection-preview.component'
const collectionOverview=({collections})=>{
    console.log(collections)
    return(
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
        }
    </div>
    )
 };

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionForPreview
})

export default connect(mapStateToProps)(collectionOverview);