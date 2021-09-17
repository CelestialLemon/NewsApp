import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { BiTrendingUp } from 'react-icons/bi'
import { FaNewspaper, FaRegNewspaper } from 'react-icons/fa'
import { GiMaterialsScience, GiCircle, GiMedicalPackAlt } from 'react-icons/gi'
import { BsBookmarks } from 'react-icons/bs'
import { RiMovie2Line } from 'react-icons/ri'
import { FcSportsMode } from 'react-icons/fc'
import { AiOutlineMedicineBox } from 'react-icons/ai'
import { GrTechnology } from 'react-icons/gr'

//import { ReactComponent as TechnologyIcon } from '../../images/technology.svg'
import TechnologyIcon from '../../images/technology.svg'
import BusinessIcon from '../../images/business.png'
import HealthIcon from '../../images/health.png'
import SportsIcon from '../../images/sports.png'
import ScienceIcon from '../../images/science.png'
import EntertainmentIcon from '../../images/entertainment.svg'
import GeneralIcon from '../../images/general.svg'


import '../../CSS/Home.css'

const red = '#D4145A';
const orange = '#FBB03B';

const SideMenuContainer = styled.div`
    min-width : 300px;
    height : 100vh;

    display : flex;
    flex-direction : column;
    align-items : center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background : white;
`

const DividingLine = styled.div`
    width : 100%;
    height : 1px;
    margin : 20px 0px;
    background : grey;
`

const SideMenu = ({onTabChange}) => {

    let history = useHistory();

    const [currentTab, setCurrentTab] = useState('top-headlines');

    useEffect(() =>
    {
        onTabChange(currentTab);
    }, [currentTab])


    return (
        <SideMenuContainer>
            <div 
            className={currentTab === 'top-headlines' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'} 
            onClick={() => setCurrentTab('top-headlines')}>
                <BiTrendingUp className='sidemenu-icon' size={25}/>
                Top Headlines
            </div>
            
            <div 
            className={currentTab === 'recommended' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'} 
            onClick={() => setCurrentTab('recommended')}>
                <FaNewspaper className='sidemenu-icon' size={25}/>
                Recommended
            </div>
            
            <div 
            className={currentTab === 'bookmarked' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'}
            onClick={() => setCurrentTab('bookmarked')}>
                <BsBookmarks className='sidemenu-icon' size={25}/>
                Bookmarked
            </div>

            <DividingLine/>
            
            <div 
            className={currentTab === 'general' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'} 
            onClick={() => setCurrentTab('general')}>
                <img src={GeneralIcon} className='sidemenu-icon' style={{height : '30px ', width : '30px', marginTop : '-3px'}}/>
                General
            </div>

            <div 
            className={currentTab === 'business' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'} 
            onClick={() => setCurrentTab('business')}>
                <img src={BusinessIcon} className='sidemenu-icon' style={{height : '25px '}}/>
                Business
            </div>
            
            <div 
            className={currentTab === 'entertainment' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'} 
            onClick={() => setCurrentTab('entertainment')}>
                <img src={EntertainmentIcon} className='sidemenu-icon' style={{height : '20px ', width : '20px', marginTop : '3px'}}/>
                Entertainment
            </div>
            
            <div 
            className={currentTab === 'science' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'} 
            onClick={() => setCurrentTab('science')}>
                <img src={ScienceIcon} className='sidemenu-icon' style={{height : '28px ', width : '28px', marginTop : '-3px'}}/>
                Science
            </div>
            
            <div 
            className={currentTab === 'sports' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'} 
            onClick={() => setCurrentTab('sports')}>
                <img src={SportsIcon} className='sidemenu-icon' style={{height : '30px ', width : '30px'}}/>
                Sports
            </div>
            
            <div 
            className={currentTab === 'health' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'} 
            onClick={() => setCurrentTab('health')}>
                <img src={HealthIcon} className='sidemenu-icon' style={{height : '25px ', width : '27px'}}/>
                Health
            </div>
            
            <div 
            className={currentTab === 'technology' ? 'sidemenu-active-tab' : 'sidemenu-inactive-tab'} 
            onClick={() => setCurrentTab('technology')}>
                <img src={TechnologyIcon} className='sidemenu-icon' style={{height : '25px ', width : '25px'}}/>
                Technology
            </div>

            <DividingLine/>
            
        </SideMenuContainer>
    )
}

export default SideMenu
