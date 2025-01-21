import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyEventComponentComponent } from './key-event-component.component';

describe('KeyEventComponentComponent', () => {
  let component: KeyEventComponentComponent;
  let fixture: ComponentFixture<KeyEventComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyEventComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
