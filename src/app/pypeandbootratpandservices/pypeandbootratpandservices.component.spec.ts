import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PypeandbootratpandservicesComponent } from './pypeandbootratpandservices.component';

describe('PypeandbootratpandservicesComponent', () => {
  let component: PypeandbootratpandservicesComponent;
  let fixture: ComponentFixture<PypeandbootratpandservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PypeandbootratpandservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PypeandbootratpandservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
