import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorerosComponent } from './floreros.component';

describe('FlorerosComponent', () => {
  let component: FlorerosComponent;
  let fixture: ComponentFixture<FlorerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlorerosComponent]
    });
    fixture = TestBed.createComponent(FlorerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
