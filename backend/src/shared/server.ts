import app from './app';

app.listen(process.env.API_PORT, () => {
  console.log('Server up on port 3000');
});
