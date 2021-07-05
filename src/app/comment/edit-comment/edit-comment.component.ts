import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service' ;
import { Comment } from 'src/app/Models/comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  constructor(public commentService: CommentService, private router:Router) { }


  ngOnInit(): void {
  }

  updateComment(id:number,comment: Comment) {
    console.log(comment);
    this.commentService.updateComment(comment).subscribe();
  }
}
