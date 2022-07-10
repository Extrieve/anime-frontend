import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeTitleSearchComponent } from './anime-title-search.component';

describe('AnimeTitleSearchComponent', () => {
  let component: AnimeTitleSearchComponent;
  let fixture: ComponentFixture<AnimeTitleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeTitleSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeTitleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
