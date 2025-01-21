import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompTTestTTComponent } from './new-comp-ttest-tt.component';

describe('NewCompTTestTTComponent', () => {
  let component: NewCompTTestTTComponent;
  let fixture: ComponentFixture<NewCompTTestTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCompTTestTTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCompTTestTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
