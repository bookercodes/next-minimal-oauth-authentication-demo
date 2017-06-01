import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

class Layout extends React.Component {
  render () {
    console.log('BaseComponent.props', this.props)
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header>
          <h1>Sessions</h1>
          <h2>Admin</h2>
          <p>{this.props.session.user.displayName}</p>
          <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
