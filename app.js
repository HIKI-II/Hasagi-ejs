const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use('/contact', function(request, response){
    response.render('contact',{
        title:'Мои контакты',
        emailsVisible: true,
        emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
        phone: '+1234567890',
    })
})
app.use('/fio', function(request, response){
    response.render('fio',{
        title:'Фио',
        name: 'Ясуо',
        sername: 'Клоун',
    })
})
app.use('/info', function(request, response){
    response.render('info',{
        title: 'Моя цель в жизни'
    })
})
app.use('/skills', function(request, response){
    response.render('skills',{
        title: 'Мои способности и языки'
    })
})
app.use('/',function (request, response){
    response.render('index.ejs')
})
app.listen(3000)