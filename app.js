const express =require('express');
const app =express();
const path =require('path')

//middlewares for parisng data

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('portfolio')
})

app.listen(3000)