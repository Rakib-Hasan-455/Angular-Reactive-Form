import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmitMsgComponent } from './form-submit-msg.component';

describe('FormSubmitMsgComponent', () => {
  let component: FormSubmitMsgComponent;
  let fixture: ComponentFixture<FormSubmitMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSubmitMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSubmitMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
