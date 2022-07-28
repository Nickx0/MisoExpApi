const Axios = require("axios").default;
getSubs = async(req,res)=>{
    data = await Axios(`https://www.youtube.com/channel/UC6tSB9TnO0f01OBeo9UEJZA/`);
    data = data.data.match(/{"label":(.+?)}/g).filter(d=>d.includes("subscribers"));
    res.json(data.pop())
};
module.exports = getSubs;
