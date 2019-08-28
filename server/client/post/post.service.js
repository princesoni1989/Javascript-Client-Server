import models from '../../connections/mysql'
import jwt from 'jsonwebtoken'

const PostModel = models.post

export function savePost(post, cb) {
    return PostModel.savePostToDb(post)
}


export function getPost(cb) {
    return PostModel.findAllPosts()
}
