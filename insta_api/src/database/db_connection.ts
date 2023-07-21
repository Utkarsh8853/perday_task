import mongoose from "mongoose";

const connect = mongoose.connect('mongodb://localhost:27017/instagram_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as any)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

export default connect;