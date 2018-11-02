/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "isset";

/**
 * Defines an isset call
 * @constructor Isset
 * @extends {Expression}
 */
module.exports = Expression.extends(KIND, function Isset(vars, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.vars = vars;
});
