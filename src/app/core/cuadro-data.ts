import { InMemoryDbService } from 'angular-in-memory-web-api';

export class CuadroData implements InMemoryDbService {
  createDb() {
    let cuadros = [
      {
        id: 0,
        name: 'Ave María',
        type: 'Pop',
        duration: '3:30',
        singer: 'David Bisbal',
        cover:
          'https://media-edg.barcelona.cat/wp-content/uploads/2016/05/butllet%C3%AD-m%C3%BAsica.jpg',
      },
      {
        id: 1,
        name: 'Bulería',
        type: 'Pop',
        duration: '4:10',
        singer: 'David Bisbal',
        cover:
          'https://media-edg.barcelona.cat/wp-content/uploads/2016/05/butllet%C3%AD-m%C3%BAsica.jpg',
      },
      {
        id: 2,
        name: 'Thunderstruck',
        type: 'Rock',
        duration: '3:40',
        singer: 'ACDC',
        cover:
          'https://media-edg.barcelona.cat/wp-content/uploads/2016/05/butllet%C3%AD-m%C3%BAsica.jpg',
      },
      {
        id: 3,
        name: 'Ashes',
        type: 'Pop',
        duration: '4:00',
        singer: 'Stellar',
        cover:
          'https://media-edg.barcelona.cat/wp-content/uploads/2016/05/butllet%C3%AD-m%C3%BAsica.jpg',
      },
      {
        id: 4,
        name: 'See me fall',
        type: 'Rap',
        duration: '3:30',
        singer: 'Y2',
        cover:
          'https://media-edg.barcelona.cat/wp-content/uploads/2016/05/butllet%C3%AD-m%C3%BAsica.jpg',
      },
      {
        id: 5,
        name: 'Le it go',
        type: 'Pop',
        duration: '3:00',
        singer: 'Elsa',
        cover:
          'https://media-edg.barcelona.cat/wp-content/uploads/2016/05/butllet%C3%AD-m%C3%BAsica.jpg',
      },
    ];
    return { cuadros: cuadros };
  }
}
