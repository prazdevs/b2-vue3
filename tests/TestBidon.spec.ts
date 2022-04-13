import { describe, it, expect } from 'vitest'

describe('suite bidon', () => {
  it('is true', () => {
    const val = true;

    expect(val).to.be.true;
  })

  it('is false', () => {
    const val = false;

    expect(val).to.be.false;
  })
})