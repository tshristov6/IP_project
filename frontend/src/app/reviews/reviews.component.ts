import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {STATE} from "../enums/STATE";
import {Comments} from "../interfaces/comments.interface";
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit{
  comments: Comments[] = [];
  states = STATE;
  currentState = STATE.VIEW;
  postComment: FormGroup;
  updateComment: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.postComment = this.formBuilder.group({
      pcs_name: new FormControl(""),
      pcs_comment: new FormControl(""),
    })

    this.updateComment = this.formBuilder.group({
      pcs_name: new FormControl(""),
      pcs_comment: new FormControl(""),
    })
  }



  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.http.get("http://localhost:420/opinions")
      .subscribe((data:any) => {
        console.log(data)
        this.comments = data
      })
  }

  publishComment() {
    console.log(this.postComment.value)
    this.http.post("http://localhost:420/opinions", this.postComment.value, {responseType: 'text'})
      .subscribe((result) => {
        location.reload()
      })
  }

  /*editComment(commentId: string) {
    this.http.put(`http://localhost:420/opinions/${commentId}`, {responseType: 'text'})
      .subscribe((result) => {
        location.reload();
      })
  }*/

  deleteComment(commentId: number) {
    this.http.delete(`http://localhost:420/opinions/${commentId}`, {responseType: 'text'})
      .subscribe((result) => {
        location.reload();
      })
  }

  writeComment() {
    this.currentState = STATE.CREATE;
  }

  changeComment() {
    this.currentState = STATE.EDIT;
  }
}
