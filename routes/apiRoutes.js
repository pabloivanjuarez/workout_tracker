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
  Workout.findOneAndUpdate({
    _id: parameters.id
  }, {
    $push: {
      exercies: body
    }
  }, {
    new: true
  }).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


router.post('/api/workouts/', ({
  body
}, res) => {
  Workout.create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});