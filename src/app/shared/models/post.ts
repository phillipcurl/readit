export class Post {
  constructor(
    public score: number,
    public author: string,
    public url: string,
    public title: string,
    public subreddit: string,
    public permalink: string
  ) {}
}