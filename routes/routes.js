const express = require("express");

const router = express.Router();
/**
 * @swagger
 * tags:
 *  name: MainData
 *  description: This is for the main data
 * /api/v1/getData:
 *  get:
 *      tags: [MainData]
 *      parameters:
 *          - name: page_number
 *            default: 1
 *            in: query
 *            schema:
 *              type: integer
 *          - name: page_length
 *            default: 10
 *            in: query
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          default:
 *              description: This is the default response for it
 */
router.get("/getData", (req, res) => {
  const { page_number, page_length } = req.query;

  res.send(req.query);
});

router.post("/getBodyData", (req, res) => {
  res.send(req.body);
});

module.exports = {
  router,
};