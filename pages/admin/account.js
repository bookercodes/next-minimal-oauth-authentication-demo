import BaseComponent from '../../components/BaseComponent'
import React from 'react'
import withSession from '../../components/withSession'

class Account extends React.Component {
  render () {
    return (
      <BaseComponent title="Account" {...this.props}>
        <h2>Account</h2>
      </BaseComponent>
    )
  }
}

export default withSession(Account)
