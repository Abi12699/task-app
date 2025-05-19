import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnDetailsComponent } from './john-details.component';

describe('JohnDetailsComponent', () => {
  let component: JohnDetailsComponent;
  let fixture: ComponentFixture<JohnDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JohnDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JohnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
