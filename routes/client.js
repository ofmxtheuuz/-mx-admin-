const expresss = require("express")
const axios = require("axios");

const router = expresss.Router();

router.get("/", (req, res) => {

    const players = [
        { userid: 1, source: "source" },
        { userid: 2, source: "source" },
        { userid: 3, source: "source" },
    ]
    
    let player = axios({
        method: 'post',
        url: 'http://131.196.197.79:3500/request/players',
        data: { }
    }).then((response) => {
        console.log(response)
        let keys = Object.keys(response.data);
        console.log(keys)
        res.render("client/index", { players: keys })
    })
})

router.get("/player", (req, res) => {
    let id = req.query.tkn_id;
    console.log(id)
    res.render("client/player", { id: id })
})

module.exports = router;