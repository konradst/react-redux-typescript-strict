/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */
export enum ActionTypes {
    SET_PLATINUM = '[Main] SET_PLATINUM',
    SET_PLATINUM_OK = '[Main] SET_PLATINUM_OK'
}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export type SetPlatinumAction = { readonly type: ActionTypes.SET_PLATINUM, readonly payload: { readonly platinum: number } }

export type SetPlatinumOkAction = { readonly type: ActionTypes.SET_PLATINUM_OK }

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function setPlatinum(platinum: number): SetPlatinumAction {
    return {
        type: ActionTypes.SET_PLATINUM,
        payload: { platinum }
    }
}

export function setPlatinumOk(options?: {}): SetPlatinumOkAction {
    return {
        type: ActionTypes.SET_PLATINUM_OK
    }
}

/*
 * Define the Action type
 * It can be one of the types defining in our action/todos file
 * It will be useful to tell typescript about our types in our reducer
 */
export type Action = SetPlatinumAction | SetPlatinumOkAction;