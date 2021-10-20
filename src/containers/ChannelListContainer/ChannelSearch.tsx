import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const ChannelSearch = () => {
    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <AiOutlineSearch color={'#fff'} size={20}/>
                </div>
                <input type="text" className="channel-search__input__text" placeholder="Search"/>
            </div>
        </div>
    );
};

export default ChannelSearch;
