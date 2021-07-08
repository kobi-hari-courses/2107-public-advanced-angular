import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsDetailsComponent } from './artists-details.component';

describe('ArtistsDetailsComponent', () => {
  let component: ArtistsDetailsComponent;
  let fixture: ComponentFixture<ArtistsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
