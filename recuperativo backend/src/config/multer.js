const multer = require("multer");
const ids = require("shortid");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/image"));
  },
  filename: function (req, file, cb) {
    cb(null, `${ids()}-${file.originalname}`);
  },
});
const upload = multer({
  storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});
module.exports = upload;
