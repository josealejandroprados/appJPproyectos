import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaLapicesComponent } from './porta-lapices.component';

describe('PortaLapicesComponent', () => {
  let component: PortaLapicesComponent;
  let fixture: ComponentFixture<PortaLapicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortaLapicesComponent]
    });
    fixture = TestBed.createComponent(PortaLapicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
