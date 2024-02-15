import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.mode';
import {
  addNewPost,
  deletePost,
  getPostById,
} from 'src/app/ngrx-state/posts/post-actions';
import { getPost, getPosts } from 'src/app/ngrx-state/posts/post-selector';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  posts$!: Observable<Post[]>;
  dialogAddPost: boolean = false;
  addPostForm!: FormGroup;
  constructor(private store: Store) {
    this.initiateForm();
  }

  initiateForm() {
    this.addPostForm = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.posts$ = this.store.select(getPosts);
  }
  onAddPost() {
    this.store.dispatch(addNewPost({ post: this.addPostForm.value }));
    this.dialogAddPost = false;
  }
  openDialog(id?: number | string) {
    if (id) {
      this.store.dispatch(getPostById({ id: id }));
      this.store.select(getPost).subscribe((data) => {
        console.log(data);
        this.addPostForm.patchValue(data!);
      });
    }
    this.dialogAddPost = true;
  }
  deletePost(id: number | string) {
    this.store.dispatch(deletePost({ id: id }));
  }
}
