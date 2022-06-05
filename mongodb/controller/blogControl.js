import listModel  from "../model/schemaModel.js";

export  default class BlogController{
    async addBlog(req, res) {
        try {
            const response = await listModel.create({
                title: 'blog title 3',
                description: 'blog description of modular microservice'
            });
            console.log('inserted one items');
            res.json(response);
        } catch (err) {
            res.json({
                msg: err.message,
                success: false
            });
        }
}

async getBlog(req, res) {

    //destructuring the patamater
    const {
        id
    } = req.params;
    try {
        const response = await listModel.findById(id);
        res.json(response);
    } catch (err) {
        res.json(err);
    }
}

async updateBlog (req, res) {
    const {
        id
    } = req.params;
    try {
        const response = await listModel.findOne({
            _id: id,
        })
        response.title = "this title is updated ";
        await response.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
}

async deleteBlog(req,res){
    const {id}=req.params;
    try{
    const response = await listModel.deleteOne({
        _id:id
    });
    res.json(response);
    } catch (err){
        res.json(err);
    }
    }
}