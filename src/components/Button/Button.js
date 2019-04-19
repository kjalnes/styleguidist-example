import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
  static propTypes = {
    foo: PropTypes.number,
    baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }
  
  static defaultProps = {
    foo: 42
  }

  render() {
    return (<button>Click me</button>)
  }
}