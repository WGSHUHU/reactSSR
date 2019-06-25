import React from 'react'
import { connect } from 'react-redux'
import { getHomeListAction } from './actions'
import { CHNAGE_LOGIN } from './constant'
import styles from './style.css'

const mapStateToProps = state => {
  return {
    list: state.home.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeList() {
      dispatch(getHomeListAction())
    },
    handleLoginOut() {
      dispatch({
        type: CHNAGE_LOGIN,
        data: false
      })
    }
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getList = this.getList.bind(this)
  }

  componentWillMount() {
    const { staticContext } = this.props
    if (staticContext) {
      this.props.staticContext.css.push(styles._getCss())
    }
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
    const { handleLoginOut } = this.props
    return (
      <div>
        <button onClick={handleLoginOut}>退出</button>
        <div className={styles['list-wgs']}>{this.getList()}</div>
      </div>
    )
  }
}

Home.loadData = store => {
  // 这个函数负责在服务端渲染之前，将组件需要的数据提前加载好
  return store.dispatch(getHomeListAction()) // 返回一个promise对象
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
