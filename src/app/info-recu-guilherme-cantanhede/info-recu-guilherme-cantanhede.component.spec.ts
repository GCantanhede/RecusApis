import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecuGuilhermeCantanhedeComponent } from './info-recu-guilherme-cantanhede.component';

describe('InfoRecuGuilhermeCantanhedeComponent', () => {
  let component: InfoRecuGuilhermeCantanhedeComponent;
  let fixture: ComponentFixture<InfoRecuGuilhermeCantanhedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRecuGuilhermeCantanhedeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRecuGuilhermeCantanhedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
