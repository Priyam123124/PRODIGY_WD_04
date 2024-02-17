const express = require('express');
const fs = require('fs');
const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    const html = fs.readFileSync('index.html')
    res.end(html.toString());
})

app.get('/about', (req, res)=>{
    const about = fs.readFileSync('about.html')
    res.end(about.toString());
})

app.get('/about.css', (req, res)=>{
    const css2 = fs.readFileSync('about.css')
    res.end(css2.toString())
})

app.get('/style.css', (req, res)=>{
    const css = fs.readFileSync('style.css');
    res.end(css.toString());
})

app.get('/background.jpeg', (req, res)=>{
    const background = fs.readFileSync('background.jpeg');
    res.end(background);
})

app.get('/ghub.png', (req, res)=>{
    const ghub = fs.readFileSync('ghub.png');
    res.end(ghub);
})

app.get('/Instagram.webp', (req, res)=>{
    const instagram = fs.readFileSync('Instagram.webp');
    res.end(instagram);
})

app.get('/lin.png', (req, res)=>{
    const lin = fs.readFileSync('lin.png');
    res.end(lin);
})
app.get('/photo.jpg', (req, res)=>{
    const photo = fs.readFileSync('photo.jpg');
    res.end(photo);
})

app.get('/priyam.png', (req, res)=>{
    const priyam = fs.readFileSync('priyam.png');
    res.end(priyam);
})

app.listen(port, ()=>{
    console.log(`The app is listening on port ${port}`)
})