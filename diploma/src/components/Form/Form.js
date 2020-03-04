import React from 'react';
import { getInputvalue, getUsers } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Form.module.css'


export default function Form(){

    const dispatch = useDispatch()
    const inputValue = useSelector(state => state.inputValue)
    
    function changeInputvalue(event){
        dispatch(getInputvalue(event.target.value))
    }
    
    function clickButton(event){
        event.preventDefault();
        dispatch(getUsers())
    }

    return(
        <form className = {styles.FormContainer}>
            <input value = {inputValue} autoFocus className = {styles.Input} onChange = {changeInputvalue}></input>
            <button className = {styles.Button} onClick = {clickButton}>Search</button>
        </form>
    )
}