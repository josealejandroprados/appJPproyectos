import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlaverosComponent } from './llaveros.component';

describe('LlaverosComponent', () => {
  let component: LlaverosComponent;
  let fixture: ComponentFixture<LlaverosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlaverosComponent]
    });
    fixture = TestBed.createComponent(LlaverosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
