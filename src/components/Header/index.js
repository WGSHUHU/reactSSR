import React from 'react'
import { CHNAGE_LOGIN } from './constant'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { headerLoginAction } from './action'
import withStyle from '../../withStyle'
import styles from './style.css'

const mapStateToProps = state => {
  return {
    login: state.header.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin() {
      dispatch({ type: CHNAGE_LOGIN, data: true })
    }
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { login, route, handleLogin } = this.props
    return (
      <div>
        <Link to="/" className={styles.head}>
          首页
        </Link>
        <br />
        {login ? (
          renderRoutes(route.routes)
        ) : (
          <div onClick={handleLogin}>登录</div>
        )}
      </div>
    )
  }
}

const ExportHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Header, styles))

ExportHeader.loadData = store => {
  return store.dispatch(headerLoginAction())
}

export default ExportHeader
