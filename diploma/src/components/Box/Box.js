import React from 'react'
import { useState } from 'react'
import {  useSelector } from 'react-redux'
import styled from 'styled-components'

export default function Box(props){
    const [data, setData] = useState(false)
    const newData = useSelector(state => state.newData)
    const videosId = useSelector(state=>state.data[props.index].id.videoId)
    
    function changeSide (props){
        setData(!data)
    }

    return(
    <Card>
        <InnerBox style = {data === true? {transform: 'rotateY(-180deg)'}: {color: 'black'}}>
            {data === false? 
            <FrontBox>
                <img src = {props.element.snippet.thumbnails.medium.url} alt = ''></img>
                <FrontBoxElement>{props.element.snippet.title}</FrontBoxElement>
                <FrontBoxElement>{props.element.snippet.channelTitle}</FrontBoxElement>
                <Button onClick = {changeSide}>description</Button>
            </FrontBox>
                : 
            <BackBox>
                <BackBoxElement>views:{newData[props.index].statistics.viewCount}</BackBoxElement>
                <BackBoxElement>likes:{newData[props.index].statistics.likeCount}</BackBoxElement>
                <BackBoxElement>dislikes:{newData[props.index].statistics.dislikeCount}</BackBoxElement>
                <BackBoxElement>comments:{newData[props.index].statistics.commentCount}</BackBoxElement>
                <BackBoxElementA href = {`https://www.youtube.com/watch?v=${videosId}/`}>Watch!</BackBoxElementA>
                <Button onClick = {changeSide}>back</Button>
            </BackBox>
            }
        </InnerBox>
    </Card>
    )
}

const Card = styled.div`
    width: 16.6vw;
    height: 25.39vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.7vw;
    perspective: 1000px;
`

const InnerBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const FrontBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`

const FrontBoxElement = styled.div`
    margin: 0;
    height: 7.5vh;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
`

const Button = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 2vh;
    cursor: pointer;
`

const BackBox = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    transform: rotateY(180deg);
    backface-visibility: hidden;
`

const BackBoxElement = styled.div`
    margin: 0;
    padding: 2vh 0;
    font-family: 'Raleway', sans-serif;
    font-size: 2vh;
    text-decoration: none;
    color: black;
`

const BackBoxElementA = styled.a`
    margin: 0;
    padding: 2.8vh 0;
    font-family: 'Raleway', sans-serif;
    font-size: 2vh;
    text-decoration: none;
    color: black;;
`

