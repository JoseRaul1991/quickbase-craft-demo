import { ToYesOrNoPipe } from './to-yes-or-no.pipe';

describe('ToYesOrNoPipe', () => {
  it('create an instance', () => {
    const pipe = new ToYesOrNoPipe();
    expect(pipe).toBeTruthy();
  });
});
