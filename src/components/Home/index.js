import React from 'react'
import { connect } from 'react-redux'
import { getHomeListAction } from './actions'
import Header from '../Header'

const mapStateToProps = state => {
  return {
    name: state.home.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeList() {
      console.log('test')
      dispatch(getHomeListAction())
    }
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { getHomeList } = this.props
    getHomeList()
  }

  render() {
    const { name } = this.props
    return (
      <div>
        <Header />
        <p>hello world {name}</p>
        <button onClick={() => alert(1)}>点击按钮</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
