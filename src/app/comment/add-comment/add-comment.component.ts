import { Component, OnInit, Output } from '@angular/core';
import { CommentService } from '../comment.service' ;
import { Comment } from 'src/app/Models/comment.model';
import { Router,ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Models/event.model';
import { User } from 'src/app/Models/user.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() eventid: number;
  constructor(public commentService: CommentService, private router:Router,private activatedRoute:ActivatedRoute) {
   
   }
commentaire : Comment = new Comment();
currentUser : User;
currentEvent : Event;
id;
  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    console.log(this.currentUser);
    this.id = this.activatedRoute.snapshot.params.id
  }
  
  addComment() {
    this.commentaire.user = "/api/users/"+this.currentUser.id;
    this.commentaire.event = "/api/events/"+this.eventid;
    this.commentaire.creationDate = "2021-07-08T22:34:53.908Z";
    //this.commentaire.content ="hello";
    this.commentService.addComment(this.commentaire).subscribe();
    
    
    
  }

}
