const text = 'hello world'

it('should contain a text', () => {
  expect(text).toMatch(/world/)
})
