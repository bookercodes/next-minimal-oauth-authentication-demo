import Link from 'next/prefetch'
import withSession from './withSession'

const Unauthorized = () => (
  <div>
    <h1>Unauthorized</h1>
    <p>You are not authorized to view this page.</p>
  </div>
)

export default Component => {
  const checkAuth = props => {
    return props.isAuthenticated ? <Component {...props} /> : <Unauthorized />
  }

  return withSession(checkAuth)
}
