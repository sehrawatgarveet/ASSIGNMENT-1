import React, { useState } from 'react'

const TAB_CONTENT = {
  about: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br><br>
  I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,
  experiences: `• Experience 1: 3 years as Sales Representative at Salesforce.<br>• Experience 2: 2 years as Customer Success Manager.<br>• Experience 3: Certified Salesforce Administrator.`,
  recommended: `John from Marketing: “Dave is one of the most dedicated people I’ve worked with.”<br>Sarah (Client): “Super helpful and always delivers on time!”`
}

export default function InfoTabs() {
  const [tab, setTab] = useState('about')

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experience' },
    { id: 'recommended', label: 'Recommended' },
  ]

  return (
    <div className="infotabs">
      {/* Tab buttons */}
      <div className="bg-[#171717] h-13 rounded-[20px] flex justify-between items-center px-1.5 font-semibold gap-2">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`hover-btn px-4 py-2 rounded-[16px] transition-all duration-300 ${
              tab === t.id ? 'bg-[#111214] text-white' : 'text-gray-400'
            }`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div
        className="text-[16px] my-5 text-gray-200 leading-relaxed tab-content"
        dangerouslySetInnerHTML={{ __html: TAB_CONTENT[tab] }}
      />
    </div>
  )
}
