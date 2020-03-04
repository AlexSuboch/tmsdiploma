import React from 'react'
import SliderButton from '../SliderButton'
import { useSelector } from 'react-redux'
import styles from './Slider.module.css'
import styled from 'styled-components'



export default function Slider(props){

    const pageArr = useSelector(state => state.pageArr)
    const moveAmount = useSelector(state => state.buttonsTransforAmount)
    
    return(
        <div>
            <div style={{position: `absolute`}}>
                <ButtonContainer style={{transition: 'transform 0.8s', transformstyle: 'preserve-3d', paddingTop: `22vh`}} move = {moveAmount}>
                    {pageArr.map((element, index) => <SliderButton index = {index} className = {styles.button} key = {index} />)}
                </ButtonContainer>
            </div>
            <div style ={{position: `absolute`, width: `42vw`, height: `32vh`, backgroundColor: 'white', bottom: `0`}}></div>
            <div style ={{position: `absolute`, width: `42.7vw`, height: `32vh`, backgroundColor: 'white', bottom: `0`, right: 0}}></div>
        </div>
    )
}

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row;
    top: 60vh;
    left: 49vw;
    position: fixed;
    transform: translateX(-${props=>props.move}px);
    width: fit-content
`