import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsEditComponent } from './artists-edit.component';

describe('ArtistsEditComponent', () => {
  let component: ArtistsEditComponent;
  let fixture: ComponentFixture<ArtistsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
