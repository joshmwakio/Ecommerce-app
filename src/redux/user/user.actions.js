import {userActionTypes} from './user.action_types'


export const setCurrentUser=user=>({
    type:userActionTypes.SET_CURRENT_USER,
    payload:user
}
)
