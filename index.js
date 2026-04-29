import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors(
    {
        origin: '*',
        credentials: true,
    }
));





app.listen(3000, () => {
  console.log('Server is running on port 3000');
});