import BaseComponent from '../../components/BaseComponent'
import React from 'react'
import restricted from '../../components/restricted'

class Account extends React.Component {
  render () {
    return (
      <BaseComponent
        title="Account"
        displayName={this.props.session.user.displayName}
      >
        <h2>Account</h2>
        {this.props.isAuthenticated.toString()}
      </BaseComponent>
    )
  }
}

export default restricted(Account)
