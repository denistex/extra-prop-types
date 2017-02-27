function noop() {}
noop.isRequired = noop;
function noopThunk() { return noop; }

module.exports = {
  and: noopThunk,
  between: noopThunk,
  childrenHavePropXorChildren: noopThunk,
  childrenOf: noopThunk,
  childrenOfType: noopThunk,
  componentWithName: noopThunk,
  elementType: noopThunk,
  explicitNull: noopThunk,
  forbidExtraProps: Object,
  integer: noopThunk,
  keysOf: noopThunk,
  mutuallyExclusiveProps: noopThunk,
  mutuallyExclusiveTrueProps: noopThunk,
  nChildren: noopThunk,
  nonNegativeInteger: noopThunk,
  nonNegativeNumber: noopThunk,
  numericString: noopThunk,
  object: noopThunk,
  or: noopThunk,
  range: noopThunk,
  restrictedProp: noopThunk,
  shape: noopThunk,
  uniqueArray: noopThunk,
  uniqueArrayOf: noopThunk,
  valuesOf: noopThunk,
  withShape: noopThunk,
};
