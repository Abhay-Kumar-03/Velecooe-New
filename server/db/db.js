// import mongoose from "mongoose";

// const connectToDb = () => {
//     mongoose.connect(process.env.MONGO_URI).then(() => {
//         console.log("Connected to database");
//     }).catch((err) => {
//         console.log("Error while connecting database:", err);
//     })
// }

// export default connectToDb;


import mongoose from "mongoose";

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error while connecting database:", err);
    });
};

export default connectToDb;
