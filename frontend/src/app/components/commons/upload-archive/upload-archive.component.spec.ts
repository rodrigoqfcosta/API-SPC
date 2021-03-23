import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArchiveComponent } from './upload-archive.component';

describe('UploadArchiveComponent', () => {
  let component: UploadArchiveComponent;
  let fixture: ComponentFixture<UploadArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
