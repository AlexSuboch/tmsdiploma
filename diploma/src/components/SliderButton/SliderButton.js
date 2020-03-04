import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { changePage, changePageData, newDataFetch } from '../store/actions'



export default function SliderButton(props){

    const dispatch = useDispatch()
    const [fetchParam, setFetchParam] = useState(true)

    function buttonClick(){
        if(fetchParam === true){
            dispatch(changePage(props.index))
            dispatch(changePageData())
            dispatch(newDataFetch())
            setFetchParam(false)
        }
        if(fetchParam === false){
            dispatch(changePage(props.index))
            dispatch(changePageData())
        }
    }

    return(
        <div className = {props.className} onClick = {buttonClick}>{props.index + 1}</div>
    )
}