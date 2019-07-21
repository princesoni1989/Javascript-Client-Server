import express from 'express'
import {saveUser, getUser } from './user.controller'
const router = express.Router()


router.post('/', saveUser)
router.get('/', getUser)
export default router