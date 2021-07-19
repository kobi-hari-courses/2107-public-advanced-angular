import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCComponent } from './option-c.component';

describe('OptionCComponent', () => {
  let component: OptionCComponent;
  let fixture: ComponentFixture<OptionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
