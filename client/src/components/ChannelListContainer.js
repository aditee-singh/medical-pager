import React from 'react'
import { ChannelList, useChannelConext } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelSearch, TeamChannelPreview, TeamChannelList } from './'
// import ChannelSearch from './ChannelSearch'
import '../App.css'
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
// import TeamChannelList from './TeamChannelList'

const ChannelListSidebar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Hospital Icon" width="30px" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={LogoutIcon} alt="Logout Icon" width="30px" />
        </div>
      </div>
    </div>
  )
}

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
    </div>
  )
}

function ChannelListContainer() {
  return (
    <>
      <ChannelListSidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer
