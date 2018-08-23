import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dataSource: any = [
    {id: 0 , name: 'Italo Costa Martins', country: {id: 0, name: 'Brazil' } },
    {id: 1 , name: 'Nizami Zamanov', country: {id: 1, name: 'Arzebajan' } },
    {id: 2 , name: 'Lorant Vrinceanu', country: {id: 2, name: 'Moldova' } },
    {id: 3 , name: 'Oleksi IDontCare', country: {id: 3, name: 'Oleksiland' } },
    {id: 4 , name: 'Saaker Whatever', country: {id: 4, name: 'Saakerland' } },
    {id: 5 , name: 'Leutlt Nope', country: {id: 5, name: 'Nopeland' } },
    {id: 6 , name: 'Dummy Dumber', country: {id: 6, name: 'Dumbland' } },
  ];

  constructor() { }

  ngOnInit() {
  }

}
