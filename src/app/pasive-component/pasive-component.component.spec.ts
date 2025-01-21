import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasiveComponentComponent } from './pasive-component.component';

describe('PasiveComponentComponent', () => {
  let component: PasiveComponentComponent;
  let fixture: ComponentFixture<PasiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasiveComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
