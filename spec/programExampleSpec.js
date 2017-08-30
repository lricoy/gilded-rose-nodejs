const program = require('../src/programExample');
const expect = require('chai').expect;

describe('Gilded Rose Program Example', () => {
  it('should update the items correctly', () => {
    const updatedItems = program();

    expect(updatedItems).to.be.an('array');
    expect(updatedItems[0].quality).equals(19);
    expect(updatedItems[0].sellIn).equals(9);

    expect(updatedItems[1].quality).equals(1);
    expect(updatedItems[1].sellIn).equals(1);

    expect(updatedItems[2].quality).equals(6);
    expect(updatedItems[2].sellIn).equals(4);

    expect(updatedItems[3].quality).equals(80);
    expect(updatedItems[3].sellIn).equals(0);

    expect(updatedItems[4].quality).equals(21);
    expect(updatedItems[4].sellIn).equals(14);

    expect(updatedItems[5].quality).equals(5);
    expect(updatedItems[5].sellIn).equals(2);
  });
});
