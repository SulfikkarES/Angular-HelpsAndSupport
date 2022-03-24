import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIRECTIVESComponent } from './directives.component';

describe('DIRECTIVESComponent', () => {
  let component: DIRECTIVESComponent;
  let fixture: ComponentFixture<DIRECTIVESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIRECTIVESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DIRECTIVESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
