import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsHomeComponent } from './spells-home.component';

describe('SpellsHomeComponent', () => {
  let component: SpellsHomeComponent;
  let fixture: ComponentFixture<SpellsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
