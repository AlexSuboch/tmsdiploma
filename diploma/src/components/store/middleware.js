import {getApi, GET_USERS, GET_INFO, getInfo, setNewData, NEW_DATA_FETCH } from './actions'

export const usersMiddleware = store => next => action => {

    if(action.type === GET_USERS || (action.type === NEW_DATA_FETCH) ) {
        const { pageToken, inputValue } = store.getState()

        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAPlOhlQbn5ucgC_5rCAaPKoi_sgSRkjDU&type=video&part=snippet&maxResults=15&q=${inputValue}&pageToken=${pageToken}`)
        .then(res => res.json())
        .then(data => {
            store.dispatch(getApi({items: data.items, code: data.nextPageToken}))
            store.dispatch(getInfo())
            store.dispatch(getInfo())
        })
    }

    if(action.type === GET_INFO){
        const { videosId } = store.getState()
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAPlOhlQbn5ucgC_5rCAaPKoi_sgSRkjDU&id=${videosId}&part=snippet,statistics`)
        .then(res => res.json())
        .then(newData =>{
            store.dispatch(setNewData(newData.items))
        })
    }

    next(action)
}
