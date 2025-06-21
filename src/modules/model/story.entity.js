export class Story {
    constructor({ title = '', author = '', content = '', image = '' }) {
        this.title = title;
        this.author = author;
        this.content = content;
        this.image = image;
    }
}