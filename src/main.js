const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs').promises;
const PORT = 3000;

const staticPath = path.resolve(__dirname, '../src');

// Servir arquivos estáticos do diretório 'src'
app.use(express.static(staticPath));

// Rota para servir o arquivo index.html
// eslint-disable-next-line space-before-function-paren
app.get('/', async(req, res) => {
  try {
    const filePath = path.join(staticPath, 'index.html');
    const content = await fs.readFile(filePath, 'utf8');

    res.send(content);
  } catch (error) {
    // eslint-disable-next-line no-trailing-spaces
    // eslint-disable-next-line no-console
    console.error('Error reading index.html:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-trailing-spaces
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${PORT}/`);
});
