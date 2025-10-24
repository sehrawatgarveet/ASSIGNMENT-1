import React, {useState} from 'react'

const TAB_CONTENT = {
  about:`Hello! I’m Dave,your sales rep here from Salesforce.I’ve been working at this awesome company for 3 years now.<br>

  I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters-Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.This is a... `,
  experiences: `Experience 1: ...\nExperience 2: ...`,
  recommended: `Recommended: ...`
}

export default function InfoTabs(){
  const [tab, setTab] = useState('about')
  const tabs = [
    {id:'about', label:'About Me'},
    {id:'experiences', label:'Experiences'},
    {id:'recommended', label:'Recommended'},
  ]

  return (
    <div className="infotabs">
      <div className="tabbar">
        {tabs.map(t => (
          <button
            key={t.id}
          className={`tab-btn ${tab===t.id ? 'active' : ''}`}
            onClick={()=>setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <p>{TAB_CONTENT[tab]}</p>
      </div>
    </div>
  )
}
