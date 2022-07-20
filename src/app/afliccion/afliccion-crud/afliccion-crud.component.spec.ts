import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfliccionCrudComponent } from './afliccion-crud.component';

describe('AfliccionCrudComponent', () => {
  let component: AfliccionCrudComponent;
  let fixture: ComponentFixture<AfliccionCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfliccionCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfliccionCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
