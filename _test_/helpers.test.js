const { format_date, format_plural, format_url } = require('../utils/helpers')

test('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');

  expect(format_date(date)).toBe('12/04/2022');
});

test('format_plural() returns a pluralized word', () => {
  expect(format_plural('bear', 2)).toBe('bearss');
  expect(format_plural('cat', 1)).toBe('cats');
});

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.toughteddez.com/');
  const url3 = format_url('https://www.google.com?q=hello');

  expect(url1).toBe('test.com');
  expect(url2).toBe('toughteddez.com');
  expect(url3).toBe('google.com');
})