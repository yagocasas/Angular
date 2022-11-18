import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  id: any;
  myCharacter: any;
  constructor(private activateRoute: ActivatedRoute, private characterService: CharactersService) {
    this.activateRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.characterService.getCharacter(this.id).subscribe((data: any) => {
        console.log(data);
        this.myCharacter = {...data}
      })
    })
   }

  ngOnInit(): void {
  }

}
