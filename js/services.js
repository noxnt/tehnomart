// Services
let service1 = document.querySelector('.service1');  // buttons
    service2 = document.querySelector('.service2');
    service3 = document.querySelector('.service3');
    service_button_current = document.querySelector('.service-button-current'); // active

    service_delivery = document.querySelector('.service-delivery'); // descriptions
    service_warranty = document.querySelector('.service-warranty');
    service_credit = document.querySelector('.service-credit');
    service_current = document.querySelector('.service-current'); // active

service1.addEventListener('click', function (evt) {
  evt.preventDefault();
  service1.classList.add('service-button-current');
  service2.classList.remove('service-button-current');
  service3.classList.remove('service-button-current');

  service_delivery.classList.add('service-current');
  service_warranty.classList.remove('service-current');
  service_credit.classList.remove('service-current');
});

service2.addEventListener('click', function (evt) {
  evt.preventDefault();
  service1.classList.remove('service-button-current');
  service2.classList.add('service-button-current');
  service3.classList.remove('service-button-current');

  service_delivery.classList.remove('service-current');
  service_warranty.classList.add('service-current');
  service_credit.classList.remove('service-current');
});

service3.addEventListener('click', function (evt) {
  evt.preventDefault();
  service1.classList.remove('service-button-current');
  service2.classList.remove('service-button-current');
  service3.classList.add('service-button-current');

  service_delivery.classList.remove('service-current');
  service_warranty.classList.remove('service-current');
  service_credit.classList.add('service-current');
});