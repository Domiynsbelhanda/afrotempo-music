import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCardComponentComponent } from './primary-card-component.component';

describe('PrimaryCardComponentComponent', () => {
  let component: PrimaryCardComponentComponent;
  let fixture: ComponentFixture<PrimaryCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
