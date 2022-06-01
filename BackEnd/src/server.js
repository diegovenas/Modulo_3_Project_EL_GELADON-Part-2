import app from './app';
import { conectarAoDatabase } from './database';

const port = 3000;

app.listen(port, () => {
  conectarAoDatabase();
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
