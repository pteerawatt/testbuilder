//fix644
/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
 
var expect = chai.expect;

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club') 
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901232')).to.equal('Diner\'s Club')
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 

  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  // prefix of 6011, 644-649, 65
  // length 16 or 19

   for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it(`has a prefix of ${prefix} and length of 16`, function() {
        expect(detectNetwork(prefix.toString() + 1123412512341)).to.equal('Discover')
      });
      it(`has a prefix of ${prefix} and length of 19`, function() {
        expect(detectNetwork(prefix.toString() + 1123412512341231)).to.equal('Discover')
      });
    })(prefix);
   }

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011425129302847')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011425129302847134')).to.equal('Discover');
  });
  
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6511425129302847')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511425129302847134')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  // prefix 5018, 5020, 5038, 6304
  // length 12-19
  for (var length = 12; length <= 19; length++) {
    (function(length) {
      var int = '0';

      it('has a prefix of 5018 and length of 16', function() {
        expect(detectNetwork('5018' + int.repeat(length - 4))).to.equal('Maestro');
      });

      it('has a prefix of 5020 and length of 16', function() {
        expect(detectNetwork('5020' + int.repeat(length - 4))).to.equal('Maestro');
      });

      it('has a prefix of 5038 and length of 16', function() {
        expect(detectNetwork('5038' + int.repeat(length - 4))).to.equal('Maestro');
      });

      it('has a prefix of 6304 and length of 16', function() {
        expect(detectNetwork('6304' + int.repeat(length - 4))).to.equal('Maestro');
      });
    })(length);
  }
});
describe('China UnionPay', function() {
  // prefix 622126-622925, 624-626, or 6282-6288
  // length 16-19 

});
