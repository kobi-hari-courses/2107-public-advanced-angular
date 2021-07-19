import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBComponent } from './option-b.component';

describe('OptionBComponent', () => {
  let component: OptionBComponent;
  let fixture: ComponentFixture<OptionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
