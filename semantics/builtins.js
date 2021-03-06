const { Func, Field, PrimType } = require('../ast');

const IntType = new PrimType('int');
const StringType = new PrimType('string');
const BoolType = new PrimType('boolean');

const standardFunctions = [
  new Func('show', [new Param('s', StringType)]),
  new Func('length', [new Param('s', StringType)], IntType),
  new Func('cuddle', [new Param('s', StringType), new Field('t', StringType),], StringType),
];

module.exports = { IntType, StringType, BoolType, standardFunctions };
