import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/training_one', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.disable('etag');
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.listen(PORT, () => {
  console.log(`Training ONE server is online.`);
  console.log(`PORT: ${PORT}`);
});