import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGridDetailComponent } from './character-grid-detail.component';

describe('CharacterGridDetailComponent', () => {
  let component: CharacterGridDetailComponent;
  let fixture: ComponentFixture<CharacterGridDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterGridDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterGridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
