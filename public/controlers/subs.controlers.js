const fetch = require("node-fetch");
getSubs = async(req,res)=>{
    data = await fetch(`https://www.youtube.com/channel/UC6tSB9TnO0f01OBeo9UEJZA/`);
    data = await data.text();
    data = data.match(/{"label":(.+?)}/g).filter(d=>d.includes("suscriptores"));
    res.json(data.pop())
};
module.exports = getSubs;
