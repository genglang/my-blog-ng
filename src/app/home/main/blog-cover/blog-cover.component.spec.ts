import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCoverComponent } from './blog-cover.component';

describe('BlogCoverComponent', () => {
  let component: BlogCoverComponent;
  let fixture: ComponentFixture<BlogCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
