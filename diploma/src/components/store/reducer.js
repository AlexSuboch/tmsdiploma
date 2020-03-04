import {GET_INPUTVALUE, GET_API, GET_USERS, GET_INFO, SET_NEW_DATA, CHANGE_PAGE, CHANGE_PAGE_DATA, NEW_DATA_FETCH} from './actions'

const initialState = {
    data: [],
    inputValue: '',
    currentPage: 0, 
    videosId: [],
    newData: [],
    pageAmount: [],
    pageArr: [],
    pageToken: '',
    loading: false,
    dataForId: [],
    transformAmount: '',
    buttonsTransforAmount: ''
}

export function dataReducer(state = initialState, action) {
    switch(action.type) {

        case GET_USERS: {
            return {
                ...state,
            }
        }

        case GET_INPUTVALUE: {
            return {
                ...state,
                inputValue: action.payload
            }
        }

        case GET_API: {
            return{
                ...state,
                data: [...state.data, ...[...action.payload.items]],
                dataForId: action.payload.items,
                pageToken: action.payload.code,
                loading: false,
            }
        }

        case GET_INFO:{
            return{
                ...state,
                videosId: [state.dataForId.map(element => element.id.videoId)],
                pageAmount: state.data.length/5 ,
            }
        }

        case SET_NEW_DATA: {
            return{
                ...state,
                newData: [...state.newData, ...action.payload],
                pageArr: state.data.slice(0, state.pageAmount),
                
            }
        }

        case CHANGE_PAGE: {
            return{
                ...state,
                currentPage: action.payload ,
            }
        }

        case CHANGE_PAGE_DATA: {
            return{
                ...state,
                loading: true,
                transformAmount: state.currentPage*1920,
                buttonsTransforAmount: state.currentPage*50
            }
        }

        case NEW_DATA_FETCH: {
            return{
                ...state,
            }
        }

        default: return state
    }

}