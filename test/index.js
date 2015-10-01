'use strict';

var should = require('should');
var lens = require('../');

describe('object-lens()', function() {
  it('should filter a flat object with one role', function(done) {
    lens({
      name: ['public', 'admin'],
      lastName: ['admin']
    }, ['public'], {
      name: 'Todd',
      lastName: 'Johnson'
    }).should.eql({
      name: 'Todd'
    });
    done();
  });

  it('should filter a flat object with two roles', function(done) {
    lens({
      name: ['public', 'admin'],
      lastName: ['admin']
    }, ['public', 'admin'], {
      name: 'Todd',
      lastName: 'Johnson'
    }).should.eql({
      name: 'Todd',
      lastName: 'Johnson'
    });
    done();
  });

  it('should filter a flat object with one dual-access roles', function(done) {
    lens({
      name: ['public', 'admin'],
      lastName: ['admin']
    }, ['admin'], {
      name: 'Todd',
      lastName: 'Johnson'
    }).should.eql({
      name: 'Todd',
      lastName: 'Johnson'
    });
    done();
  });

  it('should filter a nested object with one role', function(done) {
    lens({
      name: {
        first: ['public', 'admin'],
        last: ['admin']
      },
      age: ['public', 'admin']
    }, ['public'], {
      name: {
        first: 'Todd',
        last: 'Johnson'
      },
      age: 25
    }).should.eql({
      name: {
        first: 'Todd'
      },
      age: 25
    });
    done();
  });

});
