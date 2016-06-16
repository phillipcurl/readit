import { Component, OnInit } from '@angular/core';
import { Post } from './../../models';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css'],
  inputs: []
})
export class PostComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
