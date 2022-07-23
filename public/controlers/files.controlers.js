const Files = {};
const filesModel = require('../models/files.model')
Files.getRoutes = async(req,res)=>{
    const routes = await filesModel.find()
    res.json(routes)
};
module.exports = Files