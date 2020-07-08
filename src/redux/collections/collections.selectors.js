import {createSelector} from 'reselect';

const selectCollection=state=>state.collection;

export const selectCollectionShopData=createSelector(
    [selectCollection], collection=>collection.shop_data
)

export const selectCategory=(categotyUrlParamater)=>createSelector(
    [selectCollectionShopData], categories=>categories[categotyUrlParamater]
)

export const selectCollectionForPreview=createSelector([selectCollectionShopData], collections=>
    Object.keys(collections).map(key=>collections[key]))