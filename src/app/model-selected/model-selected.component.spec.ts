import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSelectedComponent } from './model-selected.component';

describe('ModelSelectedComponent', () => {
  let component: ModelSelectedComponent;
  let fixture: ComponentFixture<ModelSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSelectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
