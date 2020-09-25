import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUploadBookComponent } from './list-upload-book.component';

describe('ListUploadBookComponent', () => {
  let component: ListUploadBookComponent;
  let fixture: ComponentFixture<ListUploadBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUploadBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUploadBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
