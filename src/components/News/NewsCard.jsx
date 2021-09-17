import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import '../../CSS/News.css'

const red = '#D4145A';
const orange = '#FBB03B';

const PageContainer = styled.div`
    width : 100vw;
    height : 100vh;

    display : flex;
    align-items : center;
    justify-content : center;
`

const CardContainer = styled.div`
    width : 400px;
    height : fit-content;
    margin : 20px;

    display : flex;
    flex-direction : column;
    border-radius : 5px;
    background : white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition : height 250ms ease;
`

const BannerImage = styled.img`
    width : 100%;
    border-radius : 5px 5px 0px 0px;
`

const Title = styled.h3`
    margin : 10px 10px;
    text-align : left;
    font-family : Bahnschrift;
    font-size : 25px;
`

const ExpandCollapse = styled.div`
    width : 100%;
    margin-bottom : 20px;
    display : flex;
    justify-content : center;
`

const Source = styled.h3`
    margin : 10px 10px;
    font-family : Bahnschrift;
    font-size : 20px;
`

const Description = styled.h3`
    margin : 5px 10px;
    text-align : left;
    font-family : Bahnschrift;
    font-size : 20px;
    font-stretch : condensed;
    font-weight : 100;
`

const GoToArticleButtonContainer = styled.div`
    width : 100%;
    height : auto;
    margin : 0px;

    display : flex;
    justify-content : center;
`

const GoToArticleButton = styled.button`
    width : 80%;
    height : 40px;
    margin : 10px;
    
    color : white;
    font-family : Bahnschrift;
    font-size : 20px;
    outline : none;
    border : none;
    border-radius : 5px;
    background : ${red};
    cursor : pointer;

`
const NewsCard = ({articleData}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const onClickCard = () =>
    {
        window.open(articleData.url);
    }

    const onClickGoToArticle = () =>
    {
        window.open(articleData.url);
    }

    return (
        <CardContainer>
                <BannerImage src={articleData.urlToImage}></BannerImage>
                <Title>{articleData.title}</Title>
                
                <ExpandCollapse>
                    { isExpanded ? 
                    <MdExpandLess size={30} onClick={() => setIsExpanded(false)}></MdExpandLess>  
                    : <MdExpandMore size={30} onClick={() => setIsExpanded(true)}></MdExpandMore>}
                </ExpandCollapse>

            {isExpanded ? 
            <div>
                <Source>{'Source : ' + articleData.source.name}</Source>
                <Description>{articleData.description}</Description>
                <GoToArticleButtonContainer>
                    <GoToArticleButton onClick={onClickGoToArticle}>Go To Article</GoToArticleButton>
                </GoToArticleButtonContainer>
            </div>
             : <></>}

            
            </CardContainer>
    )
}

export default NewsCard
