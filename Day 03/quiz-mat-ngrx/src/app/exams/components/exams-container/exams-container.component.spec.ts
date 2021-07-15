import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsContainerComponent } from './exams-container.component';

describe('ExamsContainerComponent', () => {
  let component: ExamsContainerComponent;
  let fixture: ComponentFixture<ExamsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
