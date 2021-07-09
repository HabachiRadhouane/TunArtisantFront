import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service' ;
import { Comment } from 'src/app/Models/comment.model';
import { Router,ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Models/event.model';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  constructor(public commentService: CommentService, private router:Router,private activatedRoute:ActivatedRoute) { }
commentaire : Comment = new Comment();
currentUser : User;
currentEvent : Event;
id;
  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    console.log(this.currentUser);
    this.id = this.activatedRoute.snapshot.params.id
  }
  
  addComment(comment: Comment) {
    this.commentaire.user = "/api/comments/"+this.currentUser.id;
    this.commentaire.event = "/api/comments/"+this.currentEvent.id;
    this.commentaire.creationDate = "2021-07-08T22:34:53.908Z"
    console.log(comment);
    this.commentService.addComment(comment).subscribe();
  }

}
