import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { EscapeHtml } from './escape-html.pipe';

describe('EscapeHtml Pipe', () => {
  beforeEachProviders(() => [EscapeHtml]);

  it('should transform the input', inject([EscapeHtml], (pipe: EscapeHtml) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
