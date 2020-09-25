import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryBookComponent } from './create-category-book.component';

describe('CreateCategoryBookComponent', () => {
  let component: CreateCategoryBookComponent;
  let fixture: ComponentFixture<CreateCategoryBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
