const mongoose = require("mongoose");
// read into act 14
const Schema = mongoose.Schema;

const Workouts = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      trim: true
    },
    duration: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout