import React from 'react'
import { connect } from 'react-redux'
import { getHomeListAction } from './actions'
import Header from '../Header'

const mapStateToProps = state => {
  return {
    list: state.home.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeList() {
      dispatch(getHomeListAction(false))
    }
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getList = this.getList.bind(this)
  }

  componentDidMount() {
    const { list } = this.props
    if (!list.length) {
      this.props.getHomeList()
    }
  }

  getList() {
    const { list } = this.props
    return list.map(item => {
      return <div key={item.id}>{item.title}</div>
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.getList()}</div>
        <button onClick={() => alert(1)}>点击按钮</button>
      </div>
    )
  }
}

Home.loadData = store => {
  // 这个函数负责在服务端渲染之前，将组件需要的数据提前加载好
  return store.dispatch(getHomeListAction(true)) // 返回一个promise对象
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
