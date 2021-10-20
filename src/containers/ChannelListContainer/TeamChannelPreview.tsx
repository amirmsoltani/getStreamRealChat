import React from 'react';
import {ChannelPreviewUIComponentProps, useChatContext} from 'stream-chat-react';
import {ChannelPreview, DirectPreview} from "../../components";

export type TeamChannelPreviewPropsType = ChannelPreviewUIComponentProps & { type?: 'team' | 'direct' }
const TeamChannelPreview: React.FC<TeamChannelPreviewPropsType> = ({channel, type}) => {
    const {channel: activeChannel} = useChatContext();


    return (
        <div className={channel.id === activeChannel?.id
            ? 'channel-preview__wrapper__selected'
            : 'channel-preview__wrapper'}>
            {type === 'team' ? <ChannelPreview channel={channel}/> : <DirectPreview channel={channel}/>}
        </div>
    );
};
TeamChannelPreview.defaultProps = {
    type: 'team',
}
export default TeamChannelPreview;
