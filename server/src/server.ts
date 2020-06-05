import express, { response } from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors'
import { errors } from 'celebrate'

//precisa usar declaração de tipo no momento da importação quando se trabalha com TypeScript

const app = express();

app.use(cors())

app.use(express.json());//para o express entender o JSON

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

app.listen(3333);

/*
const users = [
    'Diego',
    'Cleiton',
    'Hobbs',
    'Brad'
]

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
}) */
