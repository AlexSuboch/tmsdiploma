import React from 'react'
import Box from '../Box'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export default function BoxContainer(){

    const data = useSelector(state => state.data)
    const transformAmount = useSelector(state => state.transformAmount)

    return (
            <CommonContainer>
                <BoxxContainer style={{transition: 'transform 0.8s', transformstyle: 'preserve-3d'}} transformAmount = {transformAmount}>
                 {data.length === 0? '': data.map((element, index) =>
                        <Box index = {index} key = {index} element = {element}></Box>)}
                </BoxxContainer>
            </CommonContainer>
    )
}

const BoxxContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
    padding: 8vh 0 0;
    transform: translateX(-${props=> props.transformAmount}px);
`   

const CommonContainer = styled.div`
    position: fixed;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`