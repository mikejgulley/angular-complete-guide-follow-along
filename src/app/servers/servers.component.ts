import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // <app-servers></app-servers>
  //selector: '[app-servers]', // select as attr --> <div app-servers></div>
  //selector: '.app-servers', // select as class --> <div class="app-servers"></div> // CANNOT use ID as selector
  templateUrl: './servers.component.html',
  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer'

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
