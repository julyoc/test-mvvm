import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfliccionComponent } from './afliccion.component';

describe('AfliccionComponent', () => {
  let component: AfliccionComponent;
  let fixture: ComponentFixture<AfliccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfliccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfliccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
