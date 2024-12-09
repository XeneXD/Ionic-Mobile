import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  arrUsers: User[] = [
    new User(1, 'user123', 'user123@example.com', 'Passw0rd'),
    new User(2, 'jane_doe', 'jane.doe@example.com', 'Qwerty123!'),
    new User(3, 'john_smith', 'john.smith@example.com', 'MySecureP@ss1'),
    new User(4, 'test_user', 'test.user@example.com', 'Testing123!'),
    new User(5, 'alice_wonder', 'alice.wonder@example.com', 'Wonderland2024!'),
  ];

  searchInput: string = '';
  results: User[] = [];
  showSuggestions: boolean = false;

  constructor() {}

  ngOnInit() {
    this.results = [...this.arrUsers];
  }

  handleInput(event: any): void {
    const query = event.target.value.trim().toLowerCase();
    this.searchInput = query;

    if (query.length > 0) {
     
      this.results = this.arrUsers.filter(user =>
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
      this.showSuggestions = this.results.length > 0;
    } else {
      
      this.results = [...this.arrUsers];
      this.showSuggestions = false;
    }
  }

  selectUser(user: User): void {
    this.searchInput = user.username;
    this.showSuggestions = false;
  }
}
