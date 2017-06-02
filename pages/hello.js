import React from 'react'

export default class extends React.Component {
  static getInitialProps ({ res }) {
    res.redirect('/')
    return {}
  }
  render () {
    return <h1>Hello</h1>
  }
}
