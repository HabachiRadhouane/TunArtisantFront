import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service' ;
import { Comment } from 'src/app/Models/comment.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {


  commentList: Comment[]=[] ;
  commentId = 0;

  constructor(private commentService: CommentService, private router:Router) { }

  ngOnInit(): void {
    this.getAllComments();
  }

  getAllComments() {
    this.commentService.getAllComments().subscribe( data => 
      { this.commentList = data['hydra:member'];
      console.log(this.commentList);
  });
    }
    
  deleteComment(id: number) {
      this.commentService.deleteComment(id).subscribe(
        (data) => {
          this.getAllComments();
        });
    }

    updateComment(comment: Comment) {
      this.commentService.newComment= Object.assign({}, comment);
    }

}
