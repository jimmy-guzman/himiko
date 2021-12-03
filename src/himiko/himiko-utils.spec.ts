import { customEquality } from './himiko-utils'

describe('customEquality', () => {
  describe('functions', () => {
    it('should return true when functions are equal', () => {
      const prevBanana = (color = 'yellow') => color
      const prevOrange = (color = 'yellow') => color

      expect(customEquality(prevBanana, prevOrange)).toBe(true)
    })
    it('should return false when functions are different', () => {
      const prevBanana = (color = 'yellow') => color
      const prevOrange = (color = 'brown') => color

      expect(customEquality(prevBanana, prevOrange)).toBe(false)
    })
  })

  describe('objects', () => {
    it('should return true when objects are equal', () => {
      const prev = { banana: 'yellow', orange: 'orange' }
      const next = { banana: 'yellow', orange: 'orange' }

      expect(customEquality(prev, next)).toBe(true)
    })
    it('should return false when objects are different', () => {
      const prev = { banana: 'yellow', orange: 'orange' }
      const next = { banana: 'brown', orange: 'orange' }

      expect(customEquality(prev, next)).toBe(false)
    })
  })
})
