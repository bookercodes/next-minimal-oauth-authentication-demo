import React from 'react'

export default Component => {
  return class extends React.Component {
    static getInitialProps ({ req }) {
      let session
      if (req) {
        if (req.user) {
          session = {
            user: req.user
          }
        }
      } else {
        // running on client...
      }
      return { isAuthenticated: req.isAuthenticated(), session }
    }

    render () {
      return <Component {...this.props} />
    }
  }
}
