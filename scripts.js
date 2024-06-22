const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // Se for enviar por email

const app = express();
app.use(bodyParser.json());

app.post('/api/doubts', (req, res) => {
  const doubt = req.body;

  // Aqui você pode armazenar no banco de dados ou enviar por email
  console.log(doubt);

  // Exemplo de envio por email
  /*
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seuemail@gmail.com',
      pass: 'suasenha'
    }
  });

  const mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'destino@gmail.com',
    subject: 'Nova Dúvida da Assembleia',
    text: JSON.stringify(doubt)
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email enviado: ' + info.response);
  });
  */

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
