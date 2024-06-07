import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecuGuilhermeCantanhedeComponent } from './home-recu-guilherme-cantanhede.component';

describe('HomeRecuGuilhermeCantanhedeComponent', () => {
  let component: HomeRecuGuilhermeCantanhedeComponent;
  let fixture: ComponentFixture<HomeRecuGuilhermeCantanhedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRecuGuilhermeCantanhedeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRecuGuilhermeCantanhedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
