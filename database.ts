const mongoose = require("mongoose");
const user = "gastonmanzano";
const password = "2122559tonga";
const dbname = "Armory";
const uri = `mongodb+srv://${user}:${password}@armory.tcikw.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const connectDB = async (): Promise<void> => {
  await mongoose
    .connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("data base connected"))
    .catch((err: any) => console.log(err));
};

export default connectDB;
