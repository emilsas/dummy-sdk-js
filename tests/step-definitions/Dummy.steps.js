import { loadFeature, defineFeature } from 'jest-cucumber'
const feature = loadFeature('../Dummy.feature', { loadRelativePath: true, errors: true })

defineFeature(feature, test => {
  test('Test Jest works in Github actions', ({ given, when, then }) => {
    let a, b, result

    given('I have installed babel-jest', () => {
      a = 2
      b = 2
    })

    when('I run a test', () => {
      result = a + b
    })

    then('it works', () => {
      expect(result).toBe(4)
    })
  })
})
