import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  commits;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCommits().subscribe((data) => {
      console.log(data);
      this.commits = data;
    });
  }

}
