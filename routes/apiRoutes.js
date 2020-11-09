const Workout = require('../models');
const router = require('express').Router();

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(400).res.json(err);
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


router.get('/api/workouts/range', (req, res) => {
  Workout.find({}).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/api/workouts/', (req, res) => {
  Workout.find({})
    .sort({
      _id: -1
    })
    .limit(1).then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;