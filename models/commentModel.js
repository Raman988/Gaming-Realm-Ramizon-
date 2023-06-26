const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    tag: Object,
    reply: mongoose.Types.ObjectId,
    likes: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    user: {type: mongoose.Types.ObjectId, ref: 'user'},
    postId: mongoose.Types.ObjectId,
    postUserId: mongoose.Types.ObjectId
}, {
    timestamps: true
})

module.exports = mongoose.model('comment', commentSchema)



// const mongoose = require('mongoose')

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

// module.exports = mongoose.model('GameComment', gameCommentSchema)
