import React from 'react';

import { AddChannel } from '../assets';

const TeamChannelList = ({ setToggleContainer, children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing }) => {   // now we will specify all the props listed in channellistcontainer. first prop is children. // type will depend upon whether we are in group chats or messages
    if(error) {                                       // the error part
        return type === 'team' ? ( 
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null
    }
    if(loading) {                  // the loading part
        return (
            <div className='team-channel-list'>
                <p className='team-channel-list__message loading'>  
                    {type === 'team' ? 'Channels' : 'Messages'} loading ...  {/* dynamic block, if it is a team or group chat, then channels else messages */}
                </p>
            </div>
        )
    }
    return (                                                                
        <div className='team-channel-list'>
            <div className='team-channel-list__header'>
                <p className='team-channel-list__header__title'>
                   {type === 'team' ? 'Channels' : 'Direct Messages'} 
                 </p>
                 <AddChannel 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                    type={type === 'team' ? 'team' : 'messaging'}
                    setToggleContainer={setToggleContainer}
                 />
                 {/* Button = Add channel */}
            </div>        
            {children}                                                        
        </div>
    )
}

export default TeamChannelList;
