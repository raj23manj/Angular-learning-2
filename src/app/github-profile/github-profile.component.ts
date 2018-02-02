import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

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

  submit() {
    //navigate([route, params], {query params})
    // ['/followers', 1, 2, 3] pass as params
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
