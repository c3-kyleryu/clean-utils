'use strict';

const {
  clamp,
  unique,
  chunk,
  deepFreeze,
  capitalize,
  sum,
  mean,
  groupBy,
} = require('../src/index');

describe('clamp', () => {
  it('returns value within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
  it('clamps below min', () => {
    expect(clamp(-1, 0, 10)).toBe(0);
  });
  it('clamps above max', () => {
    expect(clamp(11, 0, 10)).toBe(10);
  });
  it('throws when min > max', () => {
    expect(() => clamp(1, 10, 0)).toThrow(RangeError);
  });
});

describe('unique', () => {
  it('removes duplicates preserving order', () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });
  it('handles empty arrays', () => {
    expect(unique([])).toEqual([]);
  });
});

describe('chunk', () => {
  it('splits into equal chunks', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
  it('handles remainder', () => {
    expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  });
  it('throws on non-positive size', () => {
    expect(() => chunk([1], 0)).toThrow(RangeError);
  });
});

describe('deepFreeze', () => {
  it('freezes nested objects', () => {
    const o = deepFreeze({ a: { b: 1 } });
    expect(Object.isFrozen(o)).toBe(true);
    expect(Object.isFrozen(o.a)).toBe(true);
  });
});

describe('capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  it('returns empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('sum', () => {
  it('sums numbers', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
  it('returns 0 for empty', () => {
    expect(sum([])).toBe(0);
  });
});

describe('mean', () => {
  it('averages numbers', () => {
    expect(mean([2, 4, 6])).toBe(4);
  });
  it('throws on empty', () => {
    expect(() => mean([])).toThrow(RangeError);
  });
});

describe('groupBy', () => {
  it('groups by key function', () => {
    const r = groupBy([1, 2, 3, 4], (n) => (n % 2 ? 'odd' : 'even'));
    expect(r).toEqual({ odd: [1, 3], even: [2, 4] });
  });
});
