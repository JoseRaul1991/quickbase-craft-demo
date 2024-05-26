import { MaxLengthPipe } from './max-length.pipe';

describe('MaxLengthPipe', () => {
  const pipe = new MaxLengthPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('[transform]', () => {
    it('should return the same value if value length is less than or equal to maxLength', () => {
      // GIVEN
      const value = 'Test';
      const maxLength = 10;

      // WHEN
      const result = pipe.transform(value, maxLength);

      // THEN
      expect(result).toBe(value);
    });

    it('should highlight the overflow part if value length exceeds maxLength', () => {
      // GIVEN
      const value = 'Test String';
      const maxLength = 4;

      // WHEN
      const result = pipe.transform(value, maxLength);

      // THEN
      expect(result).toBe('Test<span class="text-red-600"> String</span>');
    });

    it('should handle empty string correctly', () => {
      // GIVEN
      const value = '';
      const maxLength = 5;

      // WHEN
      const result = pipe.transform(value, maxLength);

      // THEN
      expect(result).toBe('');
    });
  });
});
