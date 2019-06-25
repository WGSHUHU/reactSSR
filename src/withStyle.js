import React from 'react'

export default (DecoratedComponent, styles) => {
  return class WithStyle extends React.Component {
    componentWillMount() {
      const { staticContext } = this.props
      if (staticContext) {
        staticContext.css.push(styles._getCss())
      }
    }

    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}
