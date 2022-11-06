import listModel  from "../model/schemaModel.js";
import express from "express";
const router= express.Router();

export  default class BlogController{
    async addBlog(req, res) {
        

       const {title,description} = req.body
       console.log(title);
        try {
             
            const response = await listModel.create({
                title: "title",
                description: "description"
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

   
        console.log(id);
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