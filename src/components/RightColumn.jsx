
import React from 'react'
import InfoTabs from './InfoTabs'
import Gallery from './Gallery'

export default function RightColumn(){
  return (
    <div className="right-column">
      <div className="widget top-widget">
        <InfoTabs />
      </div>
      <div className="spacer" />
        <Gallery />
    </div>
  )
}


