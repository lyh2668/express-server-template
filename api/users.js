import express from 'express'
import Users from '../controllers/users'

const router = express.Router()

router.route('/')
  .get(Users.login)
  .post((req, res, next) => {

  })

export default router
