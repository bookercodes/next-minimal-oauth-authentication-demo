/* global fetch */
import React from 'react'
import Router from 'next/router'
import 'whatwg-fetch'

export default Component => {
  return class extends React.Component {
    static async getInitialProps ({ req, res }) {
      let session = {}
      if (req) {
        console.log('on the server...')
        if (req.user) {
          session = {
            user: req.user
          }
        } else {
          res.redirect('/admin/login')
        }
      } else {
        const response = await fetch('/auth/session', {
          credentials: 'same-origin'
        })
        const json = await response.json()
        console.log('json', json)
        if (json.user) {
          session = {
            user: json.user
          }
        } else {
          Router.push('/admin/login')
        }
      }

      let isAuthenticated
      if (session.user && session.user.id) {
        isAuthenticated = true
      }
      console.log('returning...', JSON.stringify({ isAuthenticated, session }))
      return { isAuthenticated, session }
    }

    render () {
      if (this.props.isAuthenticated) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}
