app.get('/pacientes/:id', (req, res) => {
  const consulta = "SELECT * FROM pacientes WHERE id = " + req.params.id;
  db.query(consulta, (err, filas) => res.json(filas));
});
