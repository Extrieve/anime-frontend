import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeFetchIdComponent } from './anime-fetch-id.component';

describe('AnimeFetchIdComponent', () => {
  let component: AnimeFetchIdComponent;
  let fixture: ComponentFixture<AnimeFetchIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeFetchIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeFetchIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
