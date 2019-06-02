import React from 'react'
import Header from '../Header'

const Home = () => {
  return (
    <div>
      <Header />
      <p>hello world</p>
      <button onClick={() => alert(1)}>点击按钮</button>
    </div>
  )
}

export default Home
