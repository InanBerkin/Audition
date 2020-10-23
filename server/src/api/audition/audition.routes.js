const express = require("express");
const Audition = require("./audition.model.js");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const audition = await Audition.getAudition(id);
    if (audition) {
      return res.json(audition);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
