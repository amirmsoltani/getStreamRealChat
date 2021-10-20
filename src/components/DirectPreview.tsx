import React from 'react';
import {Avatar, ChannelPreviewUIComponentProps, useChatContext} from "stream-chat-react";

type PropsType = Pick<ChannelPreviewUIComponentProps, 'channel'>;

const DirectPreview: React.FC<PropsType> = ({channel}) => {
    const {client} = useChatContext();

    const members = Object.values(channel.state.members).filter(({user}) => (user?.id !== client.userID))
    const {image, name, username} = members[0].user || {};
    return (
        <div className="channel-preview__item single">
            <Avatar image={image}
                    name={name}
                    size={24}
            />
            <p>{username}</p>
        </div>
    )
}

export default DirectPreview;
