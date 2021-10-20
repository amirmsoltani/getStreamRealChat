import React from 'react';
import {FaRegHospital} from '@react-icons/all-files/fa/FaRegHospital';
import {AiOutlineLogout} from '@react-icons/all-files/ai/AiOutlineLogout';
import {
    ChannelList,
    useChatContext,
    ChannelListMessengerProps,
    ChannelPreviewUIComponentProps
} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {SideBarItem} from "../../components";
import {ChannelSearch, TeamChannelList, TeamChannelPreview} from "./";

/* Clone Component for direct without create new function */
const TeamChannelListDirect = TeamChannelList.bind({});
TeamChannelListDirect.defaultProps = {type: 'direct'};

const TeamChannelPreviewDirect = TeamChannelPreview.bind({});
TeamChannelPreviewDirect.defaultProps = {type: 'direct'};
/* End */
const ChannelListContainer: React.FC = () => {
    return (
        <>
            {/* --Sidebar Section-- */}
            <div className="channel-list__sidebar">
                <SideBarItem Icon={FaRegHospital} containerClassName={'channel-list__sidebar__icon1'}/>
                <SideBarItem Icon={AiOutlineLogout} containerClassName={'channel-list__sidebar__icon2'}/>
            </div>

            {/* --Wrapper List Section-- */}
            <div className="channel-list__list__wrapper">
                {/* --Company Header Section-- */}
                <div className="channel-list__header">
                    <p className="channel-list__header__text">Medical Pager</p>
                </div>
                {/* --Channel Search Section-- */}
                <ChannelSearch/>
                {/* --Chat List Section-- */}
                <ChannelList
                    filters={{}}
                    List={TeamChannelList}
                    Preview={TeamChannelPreview}
                />
                <ChannelList
                    filters={{}}
                    List={TeamChannelListDirect}
                    Preview={TeamChannelPreviewDirect}
                />
            </div>
        </>
    );
}

export default ChannelListContainer;
