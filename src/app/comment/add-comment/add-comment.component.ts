import { Component, OnInit, Output } from '@angular/core';
import { CommentService } from '../comment.service' ;
import { Comment } from 'src/app/Models/comment.model';
import { Router,ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Models/event.model';
import { User } from 'src/app/Models/user.model';
import { Input } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() eventid: number;
  constructor(public datepipe: DatePipe,public commentService: CommentService, private router:Router,private activatedRoute:ActivatedRoute) {
   
   }
commentaire : Comment = new Comment();
currentUser : User;
currentEvent : Event;
id;
myDate;
  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    console.log(this.currentUser);
    this.id = this.activatedRoute.snapshot.params.id
  }
  
  addComment(Comment :Comment) {
    Comment.user = "/api/users/"+this.currentUser.id;
    Comment.event = "/api/events/"+this.eventid;
    let registerDate = new Date().toJSON("yyyy/MM/dd HH:mm");
  
    Comment.creationDate =this.datepipe.transform(registerDate, 'yyyy-MM-dd  HH:mm');
    console.log("latest_date",Comment)

    this.commentService.addComment(Comment).subscribe(result=>{
          console.log("commentaire",Comment)
          window.location.reload()

    })
    
    
    
  }

}
