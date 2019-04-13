import Vue from 'Vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({

    state: {
        singer: '',
        musicList: [],
        id: 0,
        query: ""
    },
    mutations: {
        setQuerys(state, query) {
            state.query = query

        },
        setId(state, id) {

            if (typeof id === 'object') {
                for (const i in id) {
                    state.id = id.id
                }
            } else {
                state.id = id
            }

            console.log(state.id)
        },
        setSinger(state, singer) {
            state.singer = singer

        },
        setMusic(state, musicList) {
            state.musicList = musicList
        }
    }
})
export default store