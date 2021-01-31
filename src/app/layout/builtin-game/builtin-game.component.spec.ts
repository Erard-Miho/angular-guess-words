import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinGameComponent } from './builtin-game.component';

describe('BuiltinGameComponent', () => {
  let component: BuiltinGameComponent;
  let fixture: ComponentFixture<BuiltinGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltinGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
