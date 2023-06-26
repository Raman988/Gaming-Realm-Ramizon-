const Comments = require('../models/commentModel')
const Posts = require('../models/postModel')


const commentCtrl = {
    createComment: async (req, res) => {
        try {
            const { postId, content, tag, reply, postUserId } = req.body

            const post = await Posts.findById(postId)
            if(!post) return res.status(400).json({msg: "This post does not exist."})

            if(reply){
                const cm = await Comments.findById(reply)
                if(!cm) return res.status(400).json({msg: "This comment does not exist."})
            }

            const newComment = new Comments({
                user: req.user._id, content, tag, reply, postUserId, postId
            })

            await Posts.findOneAndUpdate({_id: postId}, {
                $push: {comments: newComment._id}
            }, {new: true})

            await newComment.save()

            res.json({newComment})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateComment: async (req, res) => {
        try {
            const { content } = req.body
            
            await Comments.findOneAndUpdate({
                _id: req.params.id, user: req.user._id
            }, {content})

            res.json({msg: 'Update Success!'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    likeComment: async (req, res) => {
        try {
            const comment = await Comments.find({_id: req.params.id, likes: req.user._id})
            if(comment.length > 0) return res.status(400).json({msg: "You liked this post."})

            await Comments.findOneAndUpdate({_id: req.params.id}, {
                $push: {likes: req.user._id}
            }, {new: true})

            res.json({msg: 'Liked Comment!'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    unLikeComment: async (req, res) => {
        try {

            await Comments.findOneAndUpdate({_id: req.params.id}, {
                $pull: {likes: req.user._id}
            }, {new: true})

            res.json({msg: 'UnLiked Comment!'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteComment: async (req, res) => {
        try {
            const comment = await Comments.findOneAndDelete({
                _id: req.params.id,
                $or: [
                    {user: req.user._id},
                    {postUserId: req.user._id}
                ]
            })

            await Posts.findOneAndUpdate({_id: comment.postId}, {
                $pull: {comments: req.params.id}
            })

            res.json({msg: 'Deleted Comment!'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}


module.exports = commentCtrl



// const mongoose = require('mongoose')

// const Comments = require('../models/commentModel')
// const Posts = require('../models/postModel')

// const gameCommentSchema = new mongoose.Schema({
//     content: {
//         type: String,
//         required: true
//     },
//     gameName: {
//         type: String,
//         required: true
//     },
//     platform: {
//         type: String,
//         required: true
//     },
//     tag: Object,
//     reply: mongoose.Types.ObjectId,
//     upvotes: [{type: mongoose.Types.ObjectId, ref: 'gameUser'}],
//     user: {type: mongoose.Types.ObjectId, ref: 'gameUser'},
//     postId: mongoose.Types.ObjectId,
//     postUserId: mongoose.Types.ObjectId,
//     timestamp: {
//         type: Date,
//         default: Date.now
//     }
// })

// const commentCtrl = {
//     createComment: async (req, res) => {
//         try {
//             const { postId, content, tag, reply, postUserId } = req.body

//             const post = await Posts.findById(postId)
//             if(!post) return res.status(400).json({msg: "This post does not exist."})

//             if(reply){
//                 const cm = await Comments.findById(reply)
//                 if(!cm) return res.status(400).json({msg: "This comment does not exist."})
//             }

//             const newComment = new Comments({
//                 user: req.user._id, 
//                 content, 
//                 tag, 
//                 reply, 
//                 postUserId, 
//                 postId,

//                 gameName: req.body.gameName,
//                 platform: req.body.platform,
//                 upvotes: req.body.upvotes
//             })

//             await Posts.findOneAndUpdate({_id: postId}, {
//                 $push: {comments: newComment._id}
//             }, {new: true})

//             await newComment.save()

//             res.json({newComment})

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     updateComment: async (req, res) => {
//         try {
//             const { content, gameName, platform, upvotes } = req.body
            
//             await Comments.findOneAndUpdate({
//                 _id: req.params.id, user: req.user._id
//             }, {
//                 content, 
//                 gameName, 
//                 platform, 
//                 upvotes
//             })

//             res.json({msg: 'Update Success!'})

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     likeComment: async (req, res) => {
//         try {
//             const comment = await Comments.find({_id: req.params.id, upvotes: req.user._id})
//             if(comment.length > 0) return res.status(400).json({msg: "You liked this post."})

//             await Comments.findOneAndUpdate({_id: req.params.id}, {
//                 $push: {upvotes: req.user._id}
//             }, {new: true})

//             res.json({msg: 'Liked Comment!'})

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     unLikeComment: async (req, res) => {
//         try {

//             await Comments.findOneAndUpdate({_id: req.params.id}, {
//                 $pull: {upvotes: req.user._id}
//             }, {new: true})

//             res.json({msg: 'UnLiked Comment!'})

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     deleteComment: async (req, res) => {
//         try {
//             const comment = await Comments.findOneAndDelete({
//                 _id: req.params.id,
//                 $or: [
//                     {user: req.user._id},
//                     {postUserId: req.user._id}
//                     \n            })
//                     if(!comment) return res.status(400).json({msg: 'Comment not found or you are not authorized to delete this comment.'})
        
        
//                 await Posts.findOneAndUpdate({_id: comment.postId}, {
//                     $pull: {comments: req.params.id}
//                 })
        
//                 res.json({msg: "Deleted Comment!"})
        
//             } catch (err) {
//                 return res.status(500).json({msg: err.message})
//             }
//         },
//         getComment: async (req, res) => {
//             try {
//                 const comments = await Comments.find({postId: req.params.id})
//                 res.json({comments})
        
//             } catch (err) {
//                 return res.status(500).json({msg: err.message})
//             }
//         }
        
//         }
        
        
//         module.exports = commentCtrl