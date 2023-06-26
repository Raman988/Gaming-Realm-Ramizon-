const mongoose = require('mongoose')

const notifySchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    user: {type: mongoose.Types.ObjectId, ref: 'user'},
    recipients: [mongoose.Types.ObjectId],
    url: String,
    text: String,
    content: String,
    image: String,
    isRead: {type: Boolean, default: false}
}, {
    timestamps: true
})

module.exports = mongoose.model('notify', notifySchema)




// // For Uploading Video

// // Create Video
// createVideo: async (req, res) => {
//     try {
//         const { content, video } = req.body

//         if(video.length === 0)
//         return res.status(400).json({msg: "Please add your video."})

//         const newVideo = new Video({
//             content, video, user: req.user._id
//         })
//         await newVideo.save()

//         res.json({
//             msg: 'Created Video!',
//             newVideo: {
//                 ...newVideo._doc,
//                 user: req.user
//             }
//         })
//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
// },

// // Update Video
// updateVideo: async (req, res) => {
//     try {
//         const { content, video } = req.body

//         const video = await Video.findOneAndUpdate({_id: req.params.id}, {
//             content, video
//         }).populate("user likes", "avatar username fullname")
//         .populate({
//             path: "comments",
//             populate: {
//                 path: "user likes",
//                 select: "-password"
//             }
//         })

//         res.json({
//             msg: "Updated Video!",
//             newVideo: {
//                 ...video._doc,
//                 content, video
//             }
//         })
//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
// },

// Get Video
// getVideo: async (req, res) => {
//     try {
//         const video = await Video.findById(req.params.id)
//         .populate("user likes", "avatar username fullname followers")
//         .populate({
//             path: "comments",
//             populate: {
//                 path: "user likes",
//                 select: "-password"
//             }
//         })

//         if(!video) return res.status(400).json({msg: 'This video does not exist.'})

//         res.json({
//             video
//         })

//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
// },

// // Delete Video
// deleteVideo: async (req, res) => {
//     try {
//         const video = await Video.findOneAndDelete({_id: req.params.id, user: req.user._id})
//         await Comments.deleteMany({_id: {$in: video.comments }})

//         res.json({
//             msg: 'Deleted Video!',
//             newVideo: {
//                 ...video,
//                 user: req.user
//             }
//         })

//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
// },
// now, give model for this method

// const VideoSchema = new Schema({
//     content: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     video: {
//         type: String,
//         required: true
//     },
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     },
//     likes: [
//         {
//             user: {
//                 type: Schema.Types.ObjectId,
//                 ref: 'user'
//             }
//         }
//     ],
//     comments: [
//         {
//             user: {
//                 type: Schema.Types.ObjectId,
//                 ref: 'user'
//             },
//             content: {
//                 type: String,
//                 required: true
//             },
//             likes: [
//                 {
//                     user: {
//                         type: Schema.Types.ObjectId,
//                         ref: 'user'
//                     }
//                 }
//             ],
//             date: {
//                 type: Date,
//                 default: Date.now
//             }
//         }
//     ],
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

// const mongoose = require('mongoose')

// const videoSchema = new mongoose.Schema({
//     content: {type: String, trim: true, required: true},
//     video: {type: String, required: true},
//     user: {type: mongoose.Types.ObjectId, ref: 'users'},
//     likes: [{user: {type: mongoose.Types.ObjectId, ref: 'user'}}],
//     comments: [
//         {
//             user: {type: mongoose.Types.ObjectId, ref: 'user'},
//             content: {type: String, required: true},
//             likes: [{user: {type: mongoose.Types.ObjectId, ref: 'user'}}],
//             date: {type: Date, default: Date.now}
//         }
//     ],
//     date: {type: Date, default: Date.now}
// })

// module.exports = mongoose.model('video', videoSchema)