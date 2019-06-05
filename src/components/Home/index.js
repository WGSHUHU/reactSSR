import React from 'react'
import { connect } from 'react-redux'
import { CHANGE_NAME } from './constant'
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
    console.log(this.props)
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

Home.loadData = store => {
  // 这个函数负责在服务端渲染之前，将组件需要的数据提前加载好
  return new Promise((resolve, reject) => {
    store.dispatch({
      type: CHANGE_NAME,
      name: 'li'
    })
    resolve()
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
