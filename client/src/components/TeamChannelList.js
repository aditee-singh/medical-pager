import React from 'react'
import { AddChannel } from '../assets'

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === 'team' ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          An error occured! Please try again later!
        </p>
      </div>
    ) : null
  }
  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === 'team' ? 'Channels' : 'Messages'} Loading...
        </p>
      </div>
    )
  }
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direct Messages'}
        </p>
        {/* button to add channel */}
      </div>
      {children}
    </div>
  )
}

export default TeamChannelList
