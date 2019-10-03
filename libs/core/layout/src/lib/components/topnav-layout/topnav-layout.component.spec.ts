import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavLayoutComponent } from './topnav-layout.component';

describe('TopnavLayoutComponent', () => {
  let component: TopnavLayoutComponent;
  let fixture: ComponentFixture<TopnavLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
