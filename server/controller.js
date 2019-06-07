module.exports = {
    create: (req, res, next) => {
        const db = req.app.get("db")
        const {name, address, city, state, zipcode, montlymortgage, desiredrent, image} = req.body;

        db.create_house([name, address, city, state, zipcode, montlymortgage, desiredrent, image])
        .then( () => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(error)
        })
    },
    delete: (req, res, next) => {

    }
}


