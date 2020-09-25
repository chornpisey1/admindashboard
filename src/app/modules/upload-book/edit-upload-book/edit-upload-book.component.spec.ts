import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUploadBookComponent } from './edit-upload-book.component';

describe('EditUploadBookComponent', () => {
  let component: EditUploadBookComponent;
  let fixture: ComponentFixture<EditUploadBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUploadBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUploadBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
