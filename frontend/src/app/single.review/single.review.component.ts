import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {STATE} from "../enums/STATE";
import {Comments} from "../interfaces/comments.interface";

@Component({
  selector: 'app-single.review',
  templateUrl: './single.review.component.html',
  styleUrls: ['./single.review.component.scss']
})
export class SingleReviewComponent {
  updateComment: FormGroup;
  commentId: string = "";
  comment: Comments = {} as Comments;

  states = STATE;
  currentState = STATE.VIEW;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.commentId = params["id"];
    });

    this.updateComment = this.formBuilder.group({
      pcs_name: new FormControl(""),
      pcs_comment: new FormControl(""),
    })

  }
  editComment() {
    this.http.put(`http://localhost:420/opinions/${this.commentId}`, this.updateComment.value)
      .subscribe(() => {
        console.log("Success")
      })
  }
  getComment(id: string) {
    this.http.get(`http://localhost:420/opinions/${id}`)
      .subscribe((data: any) => {
        this.comment = data;
        this.updateComment.get("pcs_name")?.patchValue(this.comment.pcs_name);
        this.updateComment.get("pcs_comment")?.patchValue(this.comment.pcs_comment);

      })
  }
  setState(state: STATE) {
    this.currentState = state
  }
}
