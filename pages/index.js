import React from 'react'
import Layout from '../components/Layout'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuthenticated: props.isAuthenticated
    }
  }
  static async getInitialProps ({ req }) {
    console.log('getInitialProps')
    console.log('req', req)
    return {
      isAuthenticated: req.isAuthenticated()
    }
  }

  render () {
    let button
    if (this.state.isAuthenticated) {
      button = <a href="/auth/google">Login with Google</a>
    }
    return (
      <Layout>
        <p>Authenticated: {this.state.isAuthenticated.toString()}</p>
        {button}
      </Layout>
    )
  }
}
