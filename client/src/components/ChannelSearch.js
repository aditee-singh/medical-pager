import React, { useState, useEffect } from 'react'
import { useChatContext } from 'stream-chat-react'
import { SearchIcon } from '../assets'

const ChannelSearch = () => {
  const [query, setQuery] = useState('')
  console.log(SearchIcon)
  const [loading, setLoading] = useState(false)
  const getChannels = async (text) => {
    try {
      //Todo
    } catch (error) {
      setQuery('')
    }
  }
  const inputChangeHandler = (event) => {
    event.preventDefault()
    setLoading(true)
    setQuery(event.target.value)
    getChannels(event.target.value)
  }
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
          <input
            className="channel-search__input__text"
            placeholder="Search"
            value={query}
            type="text"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default ChannelSearch
