import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react';
import styled from 'styled-components';
import ArticlesGrid from '../components/News/ArticlesGrid';
import SideMenu from '../components/Home/SideMenu';

const red = '#D4145A';
const orange = '#FBB03B';

const PageContainer = styled.div`
    width : 100vw;
    min-height : 100vh;
    height : fit-content;
    display : flex;
    background : linear-gradient(to right, ${orange}, ${red});
`

const ContentContainer = styled.div`
    width : 100%;
    height : 97vh;

    margin : 10px;
    
    display : flex;
    justify-content : center;

    overflow-y : scroll;
    overflow-x : hidden;
    border-radius : 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background : white;
`

const Home = () => {
    
    const [data, setData] = useState(null);
    const [currentTab, setCurrentTab] = useState('top-headlines');

    const FetchData = async() =>
    {
        try
        {
            let res;
            if(currentTab === 'top-headlines')
            res = await axios.get('https://news-app-api-22.herokuapp.com/news/topheadlines?country=in',
            {headers : { 'Access-Control-Allow-Origin' : '*', 'Content-Type' : 'application/json'}})
            else if(currentTab === 'recommended' || currentTab === 'bookmarked')
            res = null;
            else
            res = await axios.get(`https://news-app-api-22.herokuapp.com/news/topheadlines?category=${currentTab}`,
            {headers : { 'Access-Control-Allow-Origin' : '*', 'Content-Type' : 'application/json'}})
            setData(res.data.articles);
        }catch(err)
        {

        }
    }

    const onTabChange = (newtab) =>
    {
        setCurrentTab(newtab);
        setData(null);
        console.log(newtab);
    }

    useEffect(() =>
    {
        FetchData();
    }, [currentTab])

    
    return (
        <PageContainer>
            <SideMenu onTabChange={onTabChange}></SideMenu>
            <ContentContainer>
                {data ? <ArticlesGrid articles={data} newsPerColumn={50} numOfColumns={3}></ArticlesGrid>
                 : <h3>Loading</h3>}
                 
            </ContentContainer>
        </PageContainer>
    )
    //else return (<h3>Loading</h3>)
}

export default Home
