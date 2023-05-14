const express = require("express")
const app_router = new express.Router()

app_router.get('/',(req,res)=>{
    res.render('index')
})

app_router.get('/register',(req,res)=>{
    res.render('register')
})

app_router.get('/about',(req,res)=>{
    res.render('about')
})

app_router.get('/logout',(req,res)=>{
    console.log("inside logout from app router");
    axios.get('http://localhost:5000/logout',{params:{isAuth:'true'}})
    .then((response)=>{
        console.log(response.data.msg);
        res.clearCookie(process.env.COOKIE_NAME)
        req.session.destroy()
        res.render('login',{err:""})
    })
    .catch((err)=>{

    })
    // res.redirect('/login')
})
app_router.get('/login',(req,res)=>{
    console.log("inside login from app router");
    axios.get('http://localhost:5000/logout',{params:{isAuth:'true'}})
    .then((response)=>{
        console.log(response.data.msg);
        res.clearCookie(process.env.COOKIE_NAME)
        req.session.destroy()
        res.render('login',{err:""})
    })
    .catch((err)=>{

    })
    // res.redirect('/login')
})

module.exports = app_router