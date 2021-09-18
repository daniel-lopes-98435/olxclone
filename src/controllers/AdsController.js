const { validationResult, matchedData} = require('express-validator');
const { Mongoose } = require('mongoose');

const Category = require('../models/Category');

module.exports = {
    getCategories: async (req, res) =>{
        let cats = await Category.find();

        let categories = [];

        for(let i in cats){
            categories.push({
                ...cats[i].docs,
                img: `${process.env.BASE}/assets/images/${cats[i].slug}.png`
            });
        }

        res.json({ categories });

    },
    addAction: async (req, res) =>{

    },
    getList: async (req, res) =>{

    },
    getItem: async (req, res) =>{

    },
    editAction: async (req, res) =>{

    }

}