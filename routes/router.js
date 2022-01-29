const express = require('express')
const router= express.Router()

router.get('/', (req, res) => {
    res.redirect('/login')
});
router.route('/login')
    .get((req, res) => {
        res.render('login', {title:'Login Page'});
    })
    .post((req, res) => {
        res.redirect('/dashboard')
    })

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {title:'Dashboard'});
});
router.route('/signup')
    .get((req, res) => {
        res.render('signup', {title:'Signup Page'});
    })
    .post((req, res) => {
        res.redirect('/dashboard')
    })
//HANDLE 404
router.get('/404', (req,res)=>{
    res.render('404', {title:'404'})
})
router.get('*', (req, res)=>{
    res.redirect('/404')
})

module.exports = router
