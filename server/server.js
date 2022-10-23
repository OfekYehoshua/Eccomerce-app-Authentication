const express = require(`express`);
const  mongoose = require("mongoose");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3011;
const PaymentRouter = require('./routes/paymentRouter');
const UserRouter = require('./routes/userRouter');
const ProductRouter = require('./routes/productRouter')
const bodyParser = require('body-parser');
require(`dotenv`).config({path: '.env'});
mongoose.Promise = global.Promise;
mongoose
  .connect(
   process.env.DB,
    { useNewUrlParser: true , useUnifiedTopology: true}
  )
  .then(() => console.log(`Connected to Data-base`))
  .catch((err) => console.log(err));

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.use('/api/user', UserRouter);

app.use('/api/payment', PaymentRouter);

app.use('/api/product' , ProductRouter);

app.use((err,req,res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`You are running on port ${port}`);
});