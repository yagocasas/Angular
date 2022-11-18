import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {
newCharacter: any = {
name:'',
race:'',
img:''

}

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
  }

  enviar() {
  console.log(this.newCharacter);
  this.characterService.postCharacter(this.newCharacter).subscribe()
  
 }
}
