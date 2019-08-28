import express from 'express'
import {savePost, getPost } from './post.controller'
const router = express.Router()


router.post('/', savePost)
router.get('/', getPost)
export default router