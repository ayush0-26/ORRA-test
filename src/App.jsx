import React, { useState } from 'react'
import Header from './Components/Header/header.jsx'
import Home from './Page/Home'

const App = () => {
  // searchQuery lives here so both Header (writes) and Home (reads) can share it
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Pass the current query and the updater down to the Header */}
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Pass the current query down to Home so it can filter products */}
      <Home searchQuery={searchQuery} />
    </div>
  )
}

export default App
