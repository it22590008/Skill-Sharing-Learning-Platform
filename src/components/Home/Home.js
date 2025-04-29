import React from 'react'

function Home() {
  return (
    <div>
        <button onClick={()=>(window.location.href='/additem')}>Add Item</button>
        <button onClick={()=>(window.location.href='/allitem')}>All Item</button>
    </div>
  )
}

export default Home