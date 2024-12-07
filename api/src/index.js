import express from "express";
import registerRoutes from './routes/index.js';

import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './swaggerConfig.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
    origin: 'http://127.0.0.1:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

registerRoutes(app);

app.listen(port, ()=>{
    console.log(`Server stared on ${port}`);
});

export default app;

