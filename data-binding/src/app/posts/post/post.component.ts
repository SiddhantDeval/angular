import { Component, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input()
  upVotes: number;
  @Input()
  downVotes: number;

  isUpVoted: boolean = false;
  isDownVoted: boolean = false;

  handleVoteUp() {
    if (this.isUpVoted) this.upVotes -= 1;
    else this.upVotes += 1;
    this.isUpVoted = !this.isUpVoted;
  }
  handleVoteDown() {
    if (this.isDownVoted) this.downVotes -= 1;
    else this.downVotes += 1;
    this.isDownVoted = !this.isDownVoted;
  }
}
