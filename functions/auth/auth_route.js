const router = require('express').router()

//auth login

router.get('/googleLogin', (req,res) => {
    res.render('profile')
})