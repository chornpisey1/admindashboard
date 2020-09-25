import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUploadBookComponent } from './create-upload-book.component';

describe('CreateUploadBookComponent', () => {
  let component: CreateUploadBookComponent;
  let fixture: ComponentFixture<CreateUploadBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUploadBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUploadBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
