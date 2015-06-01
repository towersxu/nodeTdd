/**
 * Created by taox on 15-6-1.
 */

//var assert = require("assert");
var should = require('should');
describe("Array",function(){
  describe('#indexOf()',function(){
    it("should return -1 when the value is not present",function(){
      [1,2,3].indexOf(5).should.equal(-1);
    });
  });
});
var user = require('../bin/user');
describe("user",function(){
    it("should username is xt,age is 24",function(){
      user.getUser().should.have.property('name','xt');
      user.getUser().should.have.property('age',25);
    });
});