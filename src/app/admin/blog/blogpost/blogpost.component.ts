import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {BlogService} from '../blog.service';
import {Blogs, PostBlogForm, PostPreviewData} from '../../../FirestoreModels/Blogs';
import {FormBuilder, FormGroup} from '@angular/forms';

interface Tag {
  display: string;
  value: string;
}

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss'],
})
export class BlogpostComponent implements OnInit {
  themeState$;
  editForm: FormGroup;
  tagsArray: Tag[];

  constructor(private shared: SharedService, private blogService: BlogService, private builder: FormBuilder) {
    this.themeState$ = this.shared.themesubject;
    this.editForm = this.builder.group({
      title: [''],
      tags: [''],
      mdString: [''],
    });
  }

  ngOnInit() {
  }

  async postBlog() {
    const postData: PostBlogForm = {
      title: this.editForm.controls.title.value as string,
      mdString: this.editForm.controls.mdString.value as string,
      public: true,
      tags: ['test', 'test']
    };
    await this.blogService.postBlog(postData);
  }

  async openPreview() {
    let tags = [];
    if (this.tagsArray.length > 0) {
      tags = this.tagsArray.map((tag: Tag) => tag.value);
    }
    const previewData: PostPreviewData = {
      title: this.editForm.controls.title.value as string,
      mdString: this.editForm.controls.mdString.value as string,
      tags: tags
    };
    await this.blogService.openBlogPreviewModal(previewData);
    console.log(this.tagsArray);
  }
}
