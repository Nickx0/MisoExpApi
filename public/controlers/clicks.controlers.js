const Clicker = {};
const clickModel = require('../models/clicks.model')
Clicker.getClicks = async (req,res)=>{
    const clicks = await clickModel.find();
    res.json(clicks)
};
Clicker.postClicks = async (req,res)=>{
    let update = { $inc: { counter: 1 }},condicion={};
    await clickModel.findOneAndUpdate(condicion,update);
    res.json({ok:"ok"})
};
module.exports = Clicker