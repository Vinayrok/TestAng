import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToParentComponent } from './send-to-parent.component';

describe('SendToParentComponent', () => {
  let component: SendToParentComponent;
  let fixture: ComponentFixture<SendToParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendToParentComponent]
    });
    fixture = TestBed.createComponent(SendToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
