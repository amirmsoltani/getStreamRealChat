import React from 'react';
import {ChannelListMessengerProps} from 'stream-chat-react';

export type TeamChannelListPropsType = ChannelListMessengerProps & { type?: 'team'|'direct' };
const TeamChannelList: React.FC<TeamChannelListPropsType> = ({children, error, loading, type}) => {
    if (error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error please wait a moment and try again
                </p>
            </div>
        ) : null
    }

    if (loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === "team" ? 'channels' : 'Messages'}loading ...
                </p>
            </div>
        )
    }
    return (
        <div className="team-channel-list">
            <div className="team-channel-list-header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'channels' : 'Direct Messages'}
                </p>
                {/* TODO:Button add channel */}
            </div>
            {children}
        </div>
    );
};
TeamChannelList.defaultProps = {type: 'team'};
export default TeamChannelList;
