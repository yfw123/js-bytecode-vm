let _inst = 0;
function inst() {
  if (_inst >= 256) {
    throw new Error('Too many opcodes');
  }
  return _inst++;
}

module.exports = {
  OP_HALT: inst(),
  OP_POP: inst(),
  OP_CONST: inst(),
  OP_CONST0: inst(),
  OP_CONST1: inst(),
  OP_CONSTTRUE: inst(),
  OP_CONSTFALSE: inst(),
  OP_LOAD: inst(),
  OP_LOAD0: inst(),
  OP_LOAD1: inst(),
  OP_LOADARG: inst(),
  OP_LOADARG0: inst(),
  OP_LOADARG1: inst(),
  OP_LOADNULL: inst(),
  OP_SET: inst(),
  OP_SET0: inst(),
  OP_SET1: inst(),
  OP_SETARG: inst(),
  OP_SETARG0: inst(),
  OP_SETARG1: inst(),
  OP_ADD: inst(),
  OP_ADD1: inst(),
  OP_SUB: inst(),
  OP_SUB1: inst(),
  OP_MUL: inst(),
  OP_DIV: inst(),
  OP_MOD: inst(),
  OP_NEG: inst(),
  OP_AND: inst(),
  OP_OR: inst(),
  OP_NOT: inst(),
  OP_BOOLNOT: inst(),
  OP_EQ: inst(),
  OP_NE: inst(),
  OP_LT: inst(),
  OP_GT: inst(),
  OP_JMP: inst(),
  OP_TJMP: inst(),
  OP_FJMP: inst(),
  OP_NEWSCOPE: inst(),
  OP_ENDSCOPE: inst(),
  OP_NEWSTRING: inst(),
  OP_NEWFUNCTION: inst(),
  OP_CALL: inst(),
  OP_ENCFUNCTION: inst(),
  OP_BINDVAR: inst(),
  OP_LOADBOUND: inst(),
  OP_RET: inst(),
};
