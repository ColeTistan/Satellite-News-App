import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessArticlesComponent } from './business-articles.component';

describe('BusinessArticlesComponent', () => {
  let component: BusinessArticlesComponent;
  let fixture: ComponentFixture<BusinessArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
