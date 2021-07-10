import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service' ;
import { Comment } from 'src/app/Models/comment.model';
import { User } from 'src/app/Models/user.model';
import { Event } from 'src/app/Models/event.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Event/events.service';
@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {

  currentEvent : Event = new Event();
  commentList: Comment[]=[] ;
  currentUser = new User();
  id
  constructor(private commentService: CommentService, 
    private eventService : EventsService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id
    console.log(this.id)
    this.currentUser = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    this.eventService.getEventById(this.id).subscribe(
      (data)=> {
        this.currentEvent = data ;
        // console.log(this.currentEvent)
        this.currentEvent.comments.forEach(comment => {
          console.log(new String(comment).split("/")[3])
          this.commentService.getCommentById(new String(comment).split("/")[3]).subscribe(
            (commentData)=> {
              this.commentList.push(commentData);
            }
          )
        });
      });
  }
  deleteComment(comment){
    this.commentService.deleteComment(comment.id).subscribe();
    this.commentList.forEach((element,index)=>{
      if(element.id==comment.id){
        this.commentList.splice(index,1)
      }
    });
  }

}