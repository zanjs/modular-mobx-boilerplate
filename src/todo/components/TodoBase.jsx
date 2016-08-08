import React, {Component} from 'react'

import BasePage from 'base/components/BasePage'


export default class TodoBase extends Component {
  render() {
    return <BasePage children={this.props.children} />
  }
}