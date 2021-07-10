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
    creationDate: '',
    user: '',
    event: ''
  }

  getAllComments(): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(this.commentUrl); 
  }
  addComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(this.commentUrl, comment);
  }
  deleteComment(id: Number){
    return this.httpClient.delete(this.commentUrl+'/'+id)
  }
  updateComment(comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(this.commentUrl+'/'+comment.id, Comment);
  }

  getCommentById(id){
    return this.httpClient.get<Comment>(this.commentUrl+"/"+id);
  }

}
