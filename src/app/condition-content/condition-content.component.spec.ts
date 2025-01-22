import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionContentComponent } from './condition-content.component';

describe('ConditionContentComponent', () => {
  let component: ConditionContentComponent;
  let fixture: ComponentFixture<ConditionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
