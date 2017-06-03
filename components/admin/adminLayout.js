/* global fetch */
import Router from 'next/router'
const logout = async event => {
  event.preventDefault()
  await fetch('/auth/logout', {
    method: 'POST',
    credentials: 'same-origin'
  })
  Router.push('/')
}

export default ({ children, session }) => (
  <div>
    <h2>Admin</h2>
    <p>Hello, {session.user.displayName}</p>
    <form onSubmit={logout}>
      <button type="submit">Logout</button>
    </form>
    {children}
  </div>
)
