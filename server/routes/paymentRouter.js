const express = require(`express`);
const router = express.Router();
const Card = require(`../models.js/card`);

// router.get(`/payment`, (req, res, next) => {
//   Card.find({})
//     .then((data) => res.json(data))
//     .catch(next);
// });
router.post(`/payment`, (req, res, next) => {
  req.body
    ? Card.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: `Please enter an input` });
});

router.delete(`/payment/:id`, (req, res, next) => {
  Card.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;