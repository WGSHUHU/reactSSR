import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const mapStateToProps = state => {
  return {
    login: state.header.login
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { login, route } = this.props
    return (
      <div>
        <Link to="/">首页</Link>
        <br />
        {login ? renderRoutes(route.routes) : <Link to="/login">登录</Link>}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(Header)
