import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmDailogComponent } from './comfirm-dailog.component';

describe('ComfirmDailogComponent', () => {
  let component: ComfirmDailogComponent;
  let fixture: ComponentFixture<ComfirmDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComfirmDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfirmDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
