import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenresComponent } from './edit-genres.component';

describe('EditGenresComponent', () => {
  let component: EditGenresComponent;
  let fixture: ComponentFixture<EditGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
