import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    /*
      if implementation like below like navigating on same page then observable should
      be used,

      this.route.paramMap
          .subscribe(params => {
            console.log(params);
            // in javascript + converts string to num
            let id = +params.get('id');
            console.log(id);
          });


      if not you can use snapshot

      this.route.snapshot.paramMap.get('id')
    */

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    console.log('GitHub Profile OnInit');
  }

}
