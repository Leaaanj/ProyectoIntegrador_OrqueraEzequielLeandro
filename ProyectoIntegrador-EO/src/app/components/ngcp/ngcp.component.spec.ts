import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcpComponent } from './ngcp.component';

describe('NgcpComponent', () => {
  let component: NgcpComponent;
  let fixture: ComponentFixture<NgcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
