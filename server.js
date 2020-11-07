mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workoutTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);