import {createSelector} from 'reselect';

const selectCollection=state=>state.collection;

export const selectCollectionShopData=createSelector(
    [selectCollection], collection=>collection.shop_data
)

export const selectCategory=(categotyUrlParamater)=>createSelector(
    [selectCollectionShopData], categories=> categories? categories[categotyUrlParamater]:null
)
export const selectisShopDataExisting=createSelector(
    [selectCollection],collection=>!!collection.shop_data
)
export const selectCollectionForPreview=createSelector([selectCollectionShopData], collections=>
    collections ? Object.keys(collections).map(key=>collections[key]):[])