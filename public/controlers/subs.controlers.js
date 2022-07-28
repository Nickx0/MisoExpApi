const Axios = require("axios").default;
getSubs = async(req,res)=>{
    data = await Axios(`https://www.youtube.com/channel/UC6tSB9TnO0f01OBeo9UEJZA/`);
    console.log(data)
    data = data.data.match(/{"label":(.+?)}/g).filter(d=>d.includes("subscribers"));
    console.log(data)
    res.json(data.pop())
};
module.exports = getSubs;
