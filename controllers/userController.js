const model = require('../models/userScheme');
const bcrypt = require('bcrypt');

const create = async (req, res) => {

    //const data = model(req.body);

    password = req.body.password

    passwordHash = await bcrypt.hash(password, 8)


    const dataPrueba = {
        username: req.body.username,
        email : req.body.email,
        password: passwordHash,
    }

    model.create(dataPrueba, (err, docs) => {
        if (err) {
            console.log('Error ', err);
            res.render('error');
        } else {
            console.log({ data: docs });
            res.redirect('/')
        }

    })

};

const validator = async (req, res) => {

    const data = model(req.body);

    await model.find({ email: req.body.email})
        .then(async (docs) => {
            
            if (docs != '') {
                for (var i = 0; i < docs.length; i++) {
                    
                    const match = await bcrypt.compare(data.password, docs[i].password);

                    if (match) {
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

    password = req.body.password

    passwordHash = await bcrypt.hash(password, 8)

    console.log("_ID" + _id)

    const filter = { _id: _id };
    const update = { username: req.body.username, email: req.body.email, password : passwordHash };

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
        res.redirect('/');
    });

}


module.exports = {
    create,
    validator,
    deleteUser,
    updateUser
}