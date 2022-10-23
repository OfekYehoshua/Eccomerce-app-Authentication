const mongoose = require(`mongoose`);

const PaymentSchema = mongoose.Schema([
  {
    CreditCardNumber: {
      type: String,
      required: true,
    },
    ExpirationDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
    CardHolderFullName: {
      type: String,
      required: true,
    },
    PersonID: {
      type: String,
      required: true,
    },
  },
]);

const Card = mongoose.model(`payment`, PaymentSchema);
module.exports = Card;