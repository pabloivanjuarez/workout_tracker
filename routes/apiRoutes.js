const Workout = require('../models');
const router = require('express').Router();

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put('/api/workouts/:id', ({
  body,
  parameters
}, res) => {
  Workout.findByIdAndUpdate(
    req.json(body, parameters);
  )
})