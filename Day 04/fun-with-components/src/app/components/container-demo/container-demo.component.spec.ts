import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDemoComponent } from './container-demo.component';

describe('ContainerDemoComponent', () => {
  let component: ContainerDemoComponent;
  let fixture: ComponentFixture<ContainerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
