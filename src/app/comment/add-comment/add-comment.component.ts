import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service' ;
import { Comment } from 'src/app/Models/comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  constructor(public commentService: CommentService, private router:Router) { }


  ngOnInit(): void {
  }
  
  addComment(comment: Comment) {
    console.log(comment);
    this.commentService.addComment(comment).subscribe();
  }

}
