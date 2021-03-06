const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false
}
const FIELDS = {
  type: Number,
  required: true,
  default: 0
}

module.exports = Object.assign({}, DEFAULT, FIELDS)

