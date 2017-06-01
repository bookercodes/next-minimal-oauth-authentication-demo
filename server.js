const dotenv = require('dotenv')
const express = require('express')
const next = require('next')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const GoogleStrategy = require('passport-google-oauth2').Strategy

dotenv.config()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handleReq = app.getRequestHandler()

app.prepare().then(() => {
  passport.serializeUser((user, done) => {
    done(null, {
      id: user.id,
      displayName: user.displayName
    })
  })
  passport.deserializeUser((user, done) => {
    done(null, user)
  })
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `http://127.0.0.1:${process.env.PORT}/auth/google/callback`,
        passReqToCallback: true // ??
      },
      function onAuthenticated (request, accessToken, refreshToken, user, done) {
        done(null, user)
      }
    )
  )

  const server = express()
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      rolling: true,
      saveUninitialized: true,
      httpOnly: true,
      cookie: {
        maxAge: 60000 * 60 * 24 * 7 * 4
      }
    })
  )
  server.use(passport.initialize())
  server.use(passport.session())
  server.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )
  server.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/error/oauth',
      successRedirect: '/'
    })
  )
  server.get('*', (req, res) => handleReq(req, res))
  server.listen(process.env.PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT}`)
  })
})

process.on('uncaughtException', function (err) {
  console.log('Uncaught Exception: ' + err)
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection: Promise:', p, 'Reason:', reason)
})
