const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});

it("returns [] for []", () => {
  assert.deepEqual(tail([]), []);
});

it("returns [] for ['Nicole']", () => {
  assert.deepEqual(tail(['Nicole']), []);
});