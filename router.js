let router = require('express').Router();
let todoList = require('./models/TodoObject');

router.post('/', async (req, res) => {
    try {
        let {title} = req.body;
        let TodoObject = new todoList({title: title});
        let data = await TodoObject.save();
        res.status(200).send({
            success: true,
            data
        });
    } catch (err) {res.status(400).send(err)}
});


router.get('/:id', async (req, res) => {

    try{
        let data = await todoList.findById(req.params.id)
        res.status(200).send({
            success: true,
            data
        })

    } catch (err) {res.status(400).send(err)}

});

router.post('/:id', async (req, res) => {
    try{
        let {title} = req.body
        let data = await todoList.findByIdAndUpdate(req.params.id,
            { $set: {title}}, {new: true});
        res.status(200).send({
            success: true,
            data
        })
    } catch(err) {
        res.status(400).send(err);
    }
});


router.post('/:id/toogle', async (req, res)=>{

    try{
        let object = await todoList.findById(req.params.id)
        let objectCompletion = object.completed;
        let data = await todoList.findByIdAndUpdate(req.params.id,
            { $set: {completed: !objectCompletion}}, {new: true})
        res.status(200).send({
            success: true,
            data
        })
    } catch (err) {res.status(400).send(err)}

});


router.delete('/:id', async (req, res)=>{

    try {
        await todoList.deleteOne({_id: req.params.id})
        res.status(200).send({
            success: true,
            data: true
        })
    } catch (err) {res.status(400).send(err)}

});

module.exports = router;
