import React from "react";
import {ChannelPreviewUIComponentProps} from "stream-chat-react";

type PropsType = Pick<ChannelPreviewUIComponentProps, 'channel'>;

const ChannelPreview: React.FC<PropsType> = ({channel}) => (
    <p className="channel-preview__item">
        # {channel.data?.name || channel.data?.id}
    </p>
);

export default ChannelPreview;
