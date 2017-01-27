/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemesComponent } from './memes.component';

describe('MemesComponent', () => {
  let component: MemesComponent;
  let fixture: ComponentFixture<MemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
