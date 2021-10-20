import React from 'react';
import {StoreType} from '../types';
import {connect, ConnectedProps} from 'react-redux';
import AuthLayout from "./AuthLayout";
import {Chat} from "stream-chat-react";
import {ChannelListContainer} from "../containers";
import ChannelContainer from "../containers/ChannelContainer";
import {StreamChat} from "stream-chat";

const mapStateToProps = (state: StoreType) => ({
    authToken: state.layout.auth.authToken,
});

/*  -- Redux connector section -- */
const connector = connect(mapStateToProps);
type LayoutIndexType = ConnectedProps<typeof connector>;
/* -- End Redux Connector Section -- */

const client = StreamChat.getInstance(process.env.API_KEY as string)

const Index: React.FC<LayoutIndexType> = ({authToken}) => {
    if (!authToken) {
        return <AuthLayout/>
    }
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer/>
                <ChannelContainer/>
            </Chat>
        </div>
    );
};

export default connector(Index);
