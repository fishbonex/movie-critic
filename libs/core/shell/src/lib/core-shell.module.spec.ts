import { async, TestBed } from '@angular/core/testing';
import { CoreShellModule } from './core-shell.module';

describe('CoreShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreShellModule).toBeDefined();
  });
});
