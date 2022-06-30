const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

const juegos = [
    {id:1, nombre: 'ligoleyen', empresa: 'el tio rito', año: '2009',},
    {id:2, nombre: 'valorant', empresa: 'el tio rito', año: '2020',},
    {id:3, nombre: 'fifas', empresa: 'i ei estor chekenen', año: '1993',},
    {id:4, nombre: 'rokeli', empresa: 'Psyonix', año: '2015',},
    {id:5, nombre: 'plantas bersus sombis guarfar', empresa: 'PopCapGames', año: '2014',},
    {id:6, nombre: 'hevimachinga', empresa: 'eseneka', año: '1996',},
    {id:7, nombre: 'dekinofaiter', empresa: 'eseneka', año: '1993',},
    




];

app.get('/',(req, res )=> {
    res.send('Prueba definitiva, ahorazy CTM FROZY');
})

app.get('/api/juegos',(req,res)=>{
    res.send(juegos)
});

app.get('/api/juego/:id',(req ,res) =>{
    const game = juegos.find(c => c.id === parseInt(req.params.id));
    if(!game) return res.status(404).send('Juego no encontrado');
    else res.json(game);
});



app.listen(PORT,()=>console.log(`funcionando en el puerto ${PORT}`));