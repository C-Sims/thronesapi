import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {GameOfThronesService} from '../../services/game-of-thrones.service';

interface Character{
  id:	number;
  firstName: string;
  lastName:	string;
  fullName:	string;
  title:	string;
  family:	string;
  image:	string;
  imageUrl:	string;
}

@Component({
  selector: 'app-character-grid-detail',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './character-grid-detail.component.html',
  styleUrl: './character-grid-detail.component.css'
})
export class CharacterGridDetailComponent {

  displayedColumns: string[] = ['id', 'name', 'image'];

  dataSource = new MatTableDataSource<Character>([]);

  @ViewChild(MatPaginator) paginator! : MatPaginator;

  character: any;

  constructor(private gameOfThronesService: GameOfThronesService) {
  }
  viewDetails(id: number){

      const characterId = id;
      if(characterId){
        this.gameOfThronesService.getCharacterById(characterId).subscribe(data=>{
          this.character = data;
        });
      }else{
        this.gameOfThronesService.getCharacterById(0).subscribe(data=>{
          this.character = data;
        });
      }

  }

  ngOnInit(){
    this.gameOfThronesService.getCharacters().subscribe(data=>{
      this.dataSource.data = data;

      setTimeout(()=>{
        this.dataSource.paginator = this.paginator;
      });

    });

    this.gameOfThronesService.getCharacterById(0).subscribe(data=>{
      this.character = data;
    });

  }

}
