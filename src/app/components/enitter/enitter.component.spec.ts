import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnitterComponent } from './enitter.component';

describe('EnitterComponent', () => {
  let component: EnitterComponent;
  let fixture: ComponentFixture<EnitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
