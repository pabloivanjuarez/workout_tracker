const mongoose = require("mongoose");
// read into act 14
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
}, {
  toJSON: {
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercises) => {
    return total + exercises.duration;
  }, 0);
});


const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout