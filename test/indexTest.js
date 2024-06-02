// indexTest.js

const chai = require('chai');
const expect = chai.expect;

const { scuberGreetingForFeet, ternaryCheckCity, switchOnCharmFromTip } = require('../index');

describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });

    it('charges twenty bucks for a distance over 400 feet and up to 2000 feet', function () {
      expect(scuberGreetingForFeet(1500)).to.equal('That will be twenty bucks.');
    });

    it('charges thirty bucks for a distance over 2000 feet', function () {
      expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
    });

    it('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
    });
  });

  describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
    });

    it('returns "No go." if the city is not NYC', function () {
      expect(ternaryCheckCity('Los Angeles')).to.equal('No go.');
    });
  });

  describe('switchOnCharmFromTip()', function () {
    it('returns "Thank you so much." for generous tips', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('returns "Thank you." for not as generous tips', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('returns "Bye." for other tips', function () {
      expect(switchOnCharmFromTip('other')).to.equal('Bye.');
    });
  });
});
