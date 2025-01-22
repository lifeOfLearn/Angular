import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiContentComponent } from './multi-content.component';

describe('MultiContentComponent', () => {
  let component: MultiContentComponent;
  let fixture: ComponentFixture<MultiContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
