// describe - groups multiple tests
// test - defines a single test case
// expect - makes an assertion about the expected outcome of a test
import { describe, expect, test } from 'bun:test';

// starts a test group named 'smoke'
describe('smoke', () => {
  // defines a test case named 'bun test runs'
  test('bun test runs', () => {
    // check whether true is equal to true - implemented as a simple assertion to verify that tests are working correctly
    expect(true).toBe(true);
  });
});
