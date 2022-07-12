describe('func', () => {
  test('mockFunc', () => {
    const fn = jest.fn((x) => x + 2);
    [1, 2].forEach(fn);

    expect(fn.mock.calls.length).toBe(2);
  });
});
