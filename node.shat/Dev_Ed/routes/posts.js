const express = require("express");
const router = express.Router();
const Post = require("../models/Post")


// Get Back all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
} )

// Submit A Post
router.post("/", async (req, res) => {
   const post = new Post({
       title: req.body.title,
       description: req.body.description
   })
try{
    const savePost = await Post.save();
    res.json(savePost)
}catch(err){
    res.json({message: err})
}
   
 

////------.then tarberakov
// //    eto mi soxranyayem v data base
// // u sa returna anum promise
//    post.save()
// //    en inch menq pahpamnumenq data base karanq nayev cuyc tanq stex
//    .then(data => {
//        res.json(data)
//    })
//    .catch(err => {
//        res.json({message: err})
//    })

})

// SPECIAL POST

router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post);
    }catch(err){
        res.json({message: err})
    }
})

// Delete Post 
router.delete("/:postId", async(req, res) => {
    try{
        const deletPost = await Post.remove({_id: req.params.postId});
        res.json(deletPost);
    }catch(err){
        res.json({message: err})
    }
})

//Update a post 
router.patch("/:postId", async (req, res) => {
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title, description: req.body.description}}
        );
        res.json(updatePost)
    }catch(err){
      res.json({message: err});
    }
});


module.exports = router;