import {posts} from "./data.js"

export function load(){
    return{
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
            subject: post.subject,
            tag: post.tag
        }))
    };
}