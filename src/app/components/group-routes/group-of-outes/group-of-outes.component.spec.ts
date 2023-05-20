import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOfOutesComponent } from './group-of-outes.component';

describe('GroupOfOutesComponent', () => {
  let component: GroupOfOutesComponent;
  let fixture: ComponentFixture<GroupOfOutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupOfOutesComponent]
    });
    fixture = TestBed.createComponent(GroupOfOutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
