import { expect } from 'chai';
import app from '../src/index';
import { agent as request } from 'supertest';
import { CalculationService } from '../src/service';
import { UserClass } from '../src/class';

describe('Index Test', () => {
  it('should always pass', function () {
    expect(1).to.equal(1);
  });

  /********* INTEGRATION TEST  ************/
  /**
   * This is an example
   */
  it('should get users for get endpoint', async () => {
    const res = await request(app).get('/');
    console.log(res.body);
    expect(res.body.length).greaterThan(0);
  });

  it('should get data from /female endpoint', async () => {
    // You need to add some tests here
    expect(1).equal(2);
  });

  it('should get data from /:id endpoint', async () => {
    // You need to add some tests here
    expect(1).equal(2);
  });

  it('should return 404 if user not found from /:id endpoint', async () => {
    // You need to add some tests here
    expect(1).equal(2);
  });

  /********* UNIT TEST  ************/

  /**
   * This is an example
   */
  it('expect UserClass getfullname works', () => {
    const guy = new UserClass('HELLO', 0);
    expect(guy.getFullName()).equal('HELLO Xu');
  });

  it('expect sayName returns a good string', () => {
    expect(1).equal(2);
  });

  it('expect amIolder works', () => {
    expect(1).equal(2);
  });

  /**
   * This is another example
   */
  it('Add function should return me the addition of two numbers', () => {
    // Implement the test here and then implement the function in the service
    // You can call it this way:
    const result = CalculationService.add(1, 2);
    expect(result).equal(3);
  });

  it('Minus function should return the substraction of two numbers', () => {
    // Similar like add test, you need to implement test and then the function
  });
});
