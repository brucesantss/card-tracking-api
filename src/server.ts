import express from 'express';

import CardRoutes from './routes/CardRoutes'

const app = express();
const port  = 8080;

// compatibilidade
app.use(express.json());
app.use('/api', CardRoutes);

app.listen(port, () => {
    console.log('servidor: on-line');
})