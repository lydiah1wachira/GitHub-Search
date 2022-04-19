import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GitsearchService } from 'src/app/search-service/gitsearch.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';
}
