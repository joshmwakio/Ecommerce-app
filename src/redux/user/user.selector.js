import {createSelector} from 'reselect'
const selectUser=state=>state.user;

export const selectCurrentUser=createSelector(
    [selectUser], cart=>cart.hidden
)

