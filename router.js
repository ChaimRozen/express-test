import express, { Router } from "express";
import fs from "fs/promises";
import { json } from "stream/consumers";

const server = express();
server.use(express.json());

server.use('/users', usersRouter);

const PORT = 3000;

server.get('/', (req ,res) => res.send("hello"));

server.post('/',async (req, res) => {
    try{
    const fileData = await fs.readFile('file.txt', 'utf8');
    const data = JSON.parse(fileData)|| [];
    if (data) res.status(500).send("server internal error");
    data.push(req, body);
    await fs.writeFile('file.txt', JSON.stringify(data));
    res.status(201).send('success')
}catch(err){
    res.status(err.status || 500).send(err.message || 'server internal error')
}
});

export default Router;

server.use('/', Router)

server.listen(PORT, ()=> console.log(`listening from port: ${PORT}`));