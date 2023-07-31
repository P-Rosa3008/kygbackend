import app from "./app";

app.listen(8080, () => {
  console.log("Running on port 8080");
});

// mongoose
//   .connect(
//     `mongodb+srv://admin:Pedrorosa30081999@cluster.arumyay.mongodb.net/knowyourgame?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     app.listen(8080 || process.env.PORT); //change this
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });