import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/models/post.mode';
import {
  addNewPost,
  deletePost,
  editPost,
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
  controlsAction: boolean = false;
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
    if (!this.controlsAction) {
      this.store.dispatch(addNewPost({ post: this.addPostForm.value }));
      this.dialogAddPost = false;
    } else {
      this.store.dispatch(editPost({ post: this.addPostForm.value }));
      this.dialogAddPost = false;
    }
  }
  openDialog(action?: string, id?: number | string) {
    if (action == 'add') {
      this.controlsAction = false;
    } else {
      this.controlsAction = true;
    }
    if (id) {
      this.store.dispatch(getPostById({ id: id }));
      var subs = this.store
        .select(getPost)
        .subscribe((data) => {
          this.addPostForm.patchValue(data!);
        })
        .unsubscribe();
    }
    this.dialogAddPost = true;
  }

  hideDialog() {
    this.addPostForm.reset();
  }

  deletePost(id: number | string) {
    if (confirm('Are you sure you want delete the post !')) {
      this.store.dispatch(deletePost({ id: id }));
    }
  }
}
