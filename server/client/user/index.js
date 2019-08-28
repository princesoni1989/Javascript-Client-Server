import express from 'express'
import {saveUser, getUser, login } from './user.controller'
const router = express.Router()


router.post('/', saveUser)
router.get('/', getUser)
router.post('/login', login)
export default router