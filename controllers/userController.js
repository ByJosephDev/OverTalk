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
                        res.redirect('/inicio' + docs[i]._id);
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

const updateUser = async (req, res) => {

    const _id = req.params._id

    console.log("_ID" + _id)

    const filter = { _id: _id };
    const update = { username: req.body.username, email: req.body.email, password : req.body.password };

    model.findOneAndUpdate(filter, update, async (err, result) =>{

        if(err){
            console.error(err);
        }

        console.log(result);
        res.redirect('/')

    });

}

const deleteUser = async (req, res) => {

    const _id = req.params._id;

    model.remove({
        _id: _id
    }, function(err, user){
        if(err)
            return console.log(err);
        
        console.log('User successfully removed from polls collection!');
        res.status(200).send();
        res.redirect('/');
    });


}


module.exports = {
    create,
    validator,
    deleteUser,
    updateUser
}