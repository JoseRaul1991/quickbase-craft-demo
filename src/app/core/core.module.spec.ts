import { CoreModule } from './core.module'; // Adjust the path as necessary

describe('CoreModule', () => {
  describe('constructor', () => {
    it('should throw an error if CoreModule is already loaded', () => {
      // GIVEN
      const parentModule = new CoreModule(); // Simulate that the module is already loaded

      // WHEN / THEN
      expect(() => new CoreModule(parentModule)).toThrowError(
        'CoreModule has already been loaded. Import this module in the AppModule only.'
      );
    });

    it('should not throw an error if CoreModule is not already loaded', () => {
      // GIVEN
      const parentModule = undefined; // No parent module

      // WHEN / THEN
      expect(() => new CoreModule(parentModule)).not.toThrow();
    });
  });
});
