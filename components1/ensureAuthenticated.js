/* global fetch */
import React from 'react'
import Router from 'next/router'
import 'whatwg-fetch'

export default Component => {
  return class extends React.Component {
    static async getInitialProps ({ req, res }) {
      let session
      if (req) {
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
        session = {
          user: json.user
        }
      }

      let isAuthenticated
      if (session.user && session.user.id) {
        isAuthenticated = true
      }

      return { isAuthenticated, session }
    }

    componentWillMount () {
      if (!this.props.isAuthenticated) {
        Router.push('/admin/login')
      }
    }

    render () {
      return <Component {...this.props} />
    }
  }
}
