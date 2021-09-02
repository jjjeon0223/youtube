import React from 'react'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="659k"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />
            <hr />

            <VideoRow
                views = "2.4M"
                subs = "659k"
                description="Do you want a FREE one hour training on JavaScript? Check out this video"
                timestamp="3 days ago"
                channel="Clever Programmer"
                title="Build a SaaS Product using ES6 JavaScript"
                image="https://i.ytimg.com/vi/60iplLAVmuA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsyHLylJPktatYEb7inxCaM0xwgQ"
            /> 

            <VideoRow 
                title="React JS Crash Course for Beginners"
                subs = "659k"
                views="2.3M Views"
                description="Perfect course for beginners starting with ReactJS"
                timestamp="4 days ago"
                channel="Clever Programmer"
                image="https://i.ytimg.com/vi/tbvguOj8C-o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1kmL0RL35WfsezpnNX7G3i7otkQ"
            
            />
        </div>
    )
}

export default SearchPage
