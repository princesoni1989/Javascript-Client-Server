import express from 'express'
import user from './user'


export default express.Router().use('/user', user)