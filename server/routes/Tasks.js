// use express in creating the express route
const router = require("express").Router();
const Tasks = require("../model/Task")


// creating task
router.post("/POST/v1/tasks", async (req, res) => {

    const newPost = new Tasks(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(404).json(error)
    }
});
// update task
router.put("/PUT/v1/tasks/:id", async (req, res) => {

    try {
        const updatePost = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json(updatePost);

    } catch (error) {
        res.status(404).json(error)
    }
});

//Deleting the specific task
router.delete("/DELETE/v1/tasks/:id", async (req, res) => {

    try {


        await post.delete();

        res.status(200).json("task has been deleted.... ");

    } catch (error) {
        res.status(505).json(error)
    }
});
// getting asigle task
router.get("/GET/v1/tasks/:id", async (req, res) => {
    try {
        const post = await Tasks.findById(req.params.id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(error.message("there was no task at that id"));
    }
});

// getting all the task

router.get("/GET/v1/tasks", async (req, res) => {

    try {
        let posts;
        posts = await Tasks.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json(error);
    }
});



module.exports = router;