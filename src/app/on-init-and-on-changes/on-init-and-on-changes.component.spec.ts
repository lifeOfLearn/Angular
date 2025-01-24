import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInitAndOnChangesComponent } from './on-init-and-on-changes.component';

describe('OnInitAndOnChangesComponent', () => {
  let component: OnInitAndOnChangesComponent;
  let fixture: ComponentFixture<OnInitAndOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnInitAndOnChangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnInitAndOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
