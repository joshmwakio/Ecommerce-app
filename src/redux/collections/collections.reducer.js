import ShopActionTypes from './collections.action_types';
const INITIAL_STATE={
  shop_data:'',
  isFetching:false,
  errorMessage:undefined
}

const collectionReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){

      case ShopActionTypes.FETCH_COLLECTIONS_START:
        return{
          ...state,isFetching:true
        }
      case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
        return{
          ...state,isFetching:false,shop_data:action.payload
        }
        case ShopActionTypes.FETCH_COLLECTION_FAILURE:
          return{
            ...state,isFetching:false,errorMessage:action.payload
          }
            default:
                return state;
        }

}
export default  collectionReducer;