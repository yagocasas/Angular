import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  myCharacters?: any[];
  constructor(private charactersService: CharactersService) { 
    this.charactersService.getAllCharacters().subscribe((data:any) => {
      console.log(data); //este es el array de datos
      // this.myCharacters = [...data];
      // console.log(this.myCharacters);
      
      const characterData: any[] = data.map((character: any)=>({ //con este map saco los campos que yo quiero
        id: character._id,
        name: character.name,
        image: character.img,
        race: character.race
      }))
      
      this.myCharacters = [...characterData]
      console.log(this.myCharacters);
      
    });
  }

  ngOnInit(): void {
  }

}
