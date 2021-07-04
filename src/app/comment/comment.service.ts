import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './../Models/comment.model';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }
  commentUrl:string =  'http://127.0.0.1:8000/api/comments';

  newComment: Comment = {
    id: null,
    content: '',
    creation_date: '',
    user_id: '',
    event_id: ''
  }

  getAllComments(): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(this.commentUrl); 
  }
  addComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(this.commentUrl, Comment);
  }
  deleteComment(id:Number){
    return this.httpClient.delete(this.commentUrl+'/'+id)
  }
  updateComment(Comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(this.commentUrl+Comment.id, Comment);
  }

}
