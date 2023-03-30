import { GetterTree } from 'vuex'
import { State } from "./interfaces/State"
import { User } from "./interfaces/User"


export type Getters = {
    getLoggedIn(state: State): boolean
}

export const getters: GetterTree<State, State> & Getters = {
    getLoggedIn: (state: { loginState: any; }) => {
        return state.loginState
    }

}
