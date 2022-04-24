const model = require('../models/userScheme');

const create = (req, res) => {

    const data = model(req.body);

    model.create(data, (err, docs) => {
        if (err) {
            console.log('Error ', err);
            res.render('error');
        } else {
            console.log({ data: docs });
            res.redirect('/')
        }

    })

};

const validator = (req, res) => {

    const data = model(req.body);

    model.find(req.body)
        .then(async (docs) => {
            await
                console.log(docs)
            if (docs != '') {
                for (var i = 0; i < docs.length; i++) {
                    if (docs[i].email == data.email && docs[i].password == data.password) {
                        console.log('Valor encontrado' + docs);
                        res.redirect('/inicio');
                    }
                }
            } else {
                res.redirect('/');
            }
        })
        .catch((error) => {
            console.log('Error en Login: ' + error);
            res.redirect('/');
        });

};


module.exports = {
    create,
    validator
}