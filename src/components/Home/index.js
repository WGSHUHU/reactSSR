import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const Home = props => {
  return (
    <div>
      <Header />
      <p>hello world {props.name}</p>
      <button onClick={() => alert(1)}>点击按钮</button>
    </div>
  )
}

export default connect(
  mapStateToProps,
  null
)(Home)
