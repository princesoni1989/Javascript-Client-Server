import {
    savePost as savePostService,
    getPost as getPostService,
} from './post.service'

export async function savePost(req, res) {
    try {
        const response = await savePostService(req.body)
        res.json(response)
    } catch (e) {
        res.json(e)
        console.log(e)
    }
}

export async function getPost(req, res) {
    try {
        const response = await getPostService()
        res.json(response)
    } catch (e) {
        res.json(e)
    }
}
