import { addAlpha, iconExists, spacing } from './utils.ts'

describe('spacing', () => {
  it('should produce the correct value in pixels', () => {
    const expectedSpacing = '8px'
    expect(spacing(1)).toBe(expectedSpacing)
  })
})

describe('addAlpha', () => {
  it('should add alpha to color', () => {
    const color = '#FFFFFF'
    const opacity = 0.5
    const result = addAlpha(color, opacity)
    expect(result).toBe('#FFFFFF80')
  })

  it('should handle opacity values greater than 1', () => {
    const color = '#FFFFFF'
    const opacity = 1.5
    const result = addAlpha(color, opacity)
    expect(result).toBe('#FFFFFFFF')
  })

  it('should handle opacity values less than 0', () => {
    const color = '#FFFFFF'
    const opacity = -0.5
    const result = addAlpha(color, opacity)
    expect(result).toBe('#FFFFFF0')
  })

  it('should handle undefined opacity', () => {
    const color = '#FFFFFF'
    const result = addAlpha(color, undefined)
    expect(result).toBe('#FFFFFFFF')
  })
})

describe('iconExists', () => {
  it('should return true if icon exists', () => {
    const iconName = 'close'
    expect(iconExists(iconName)).toBe(true)
  })

  it('should return false if icon does not exist', () => {
    const iconName = 'nonExistentIcon'
    expect(iconExists(iconName)).toBe(false)
  })
})
