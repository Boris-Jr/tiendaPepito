import mongoose from "mongoose";

const bdConnection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successful");
  } catch (e) {
    console.log("Conncet to database failed", e);
  }
};

export default { bdConnection };
