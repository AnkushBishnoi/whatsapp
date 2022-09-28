import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css'

function SidebarChat() {
  return (
    <div className='sidebarChat'>
 <Avatar src="https://wallpapers.com/images/high/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"/>
 <div className="sidebarChat__info">
    <h2>Rajat</h2>
    <p>This is the last message</p>
 </div>
 
    </div>
  )
}

export default SidebarChat