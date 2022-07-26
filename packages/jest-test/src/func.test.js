describe('func', () => {
  test('mockFunc', () => {
    const fn = jest.fn((x) => x + 2);
    [1, 2].forEach(fn);

    expect(fn.mock.calls.length).toBe(2);

    const myMockFn = jest
      .fn(() => 'default')
      .mockImplementationOnce(() => 'first call')
      .mockImplementationOnce(() => 'second call');
    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    // 当 mockImplementationOne定义的实现逐个调用完毕时， 如果定义了jest.fn ，它将使用 jest.fn 。
  });
});
