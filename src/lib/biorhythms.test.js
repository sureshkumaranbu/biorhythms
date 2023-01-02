import { calculateBiorhythms } from './biorhythms';

describe('calculateBiorhythms', () => {
  it('physical calculation', () => {
    const birthDate = new Date('1999-12-31');
    const targetDate = new Date('2022-12-31');
    const result = calculateBiorhythms(birthDate, targetDate);
    expect(result.physical).toBeCloseTo(0.9977);
  });
  it('emotional calculation', () => {
    const birthDate = new Date('1999-12-31');
    const targetDate = new Date('2022-12-31');
    const result = calculateBiorhythms(birthDate, targetDate);
    expect(result.emotional).toBeCloseTo(0.2225);
  });
  it('intelluctual calculation', () => {
    const birthDate = new Date('1999-12-31');
    const targetDate = new Date('2022-12-31');
    const result = calculateBiorhythms(birthDate, targetDate);
    expect(result.intellectual).toBeCloseTo(-0.4582);
  });
});
