import React from 'react'
import RightColumn from './components/RightColumn'

export default function App(){
  return (
    <div className="app-root">
      <div className="left-empty"></div>
      <div className="right-column-wrapper">
        <RightColumn />
      </div>
    </div>
  )
}
