import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) { }

  ngOnInit() {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => { // map gives an error
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      // this.service.getAll({id: id, page: page})
      return this.service.getAll();
    })
    .subscribe(followers => {
      this.followers = followers;
    });

    // let id = this.route.paramMap.subscribe(params => {
    //
    // });
    //let id = this.route.snapshot.paramMap.get('id');
    // this.route.queryParamMap.subscribe(params => {
    //
    // });
    //this.route.snapshot.queryParamMap.get('page');
  }
}
