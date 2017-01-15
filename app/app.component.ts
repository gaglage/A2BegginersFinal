import { Component } from '@angular/core';


@Component({
  selector: 'my-app',

  template: `<h1>Gabi App</h1>
  <input type="text" 
    [value]="title" 
    (input)="title = $event.target.value">

  <input type="text"  
    [(ngModel)]="title">

  <input type="button" 
    (click)="title = ''" 
    value="Clear">  

  Preview: {{title}}
  <courses></courses>
  <authors></authors>

  
  <h2>Práctica star </h2>
  <favorite 
    [isFavorite]="post.isFavorite"
    (change)="onChangeFavorite($event)"  
  ></favorite> 
  

    <h2>Práctica likes </h2>
    <like 
      [isLiked]="likes.isLiked"
      [numberLikes]="likes.numLikes"
       
    ></like> 
     <h2>Práctica likes </h2>
    <voter 
      [voteCounter] = "votes.counter"
      [myVote] ="votes.cachedVote"
      (vote)="onChangeVote($event)"
       
    ></voter>   
    <br>
    <br>
    <h2>Práctica Tweet</h2>
    <tweet></tweet>

    <h2>Práctica Custom Pipe</h2>
    <div>
    {{pipepost.title}}
    <br>
    {{pipepost.body |summary:[10]}}
    
    </div>

    <h2>Zippy Component</h2>
     <zippy [title]="'Esto es el titulo 1'" >Contenido opcion 1</zippy>
      <zippy [title]="'Esto es el titulo 2'" >Contenido opcion 2</zippy>

  `,

})
export class AppComponent {
  title = "test";

  votes = {
    counter: 10,
    cachedVote: 1
  }

  likes={
    numLikes :10,
    isLiked:false

  }

  post = {
    title: "title",
    isFavorite: true
  }

  pipepost ={
    title: 'Esto es el titulo para custom pipe',
    body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum cupiditate vitae officiis quam esse quis quasi! Placeat, at corrupti. Voluptates dolorem, quia suscipit enim beatae laboriosam consequuntur amet maxime perspiciatis.'
  }

  onChangeFavorite($event) {
    console.log($event);
  }
  onChangeVote($event) {
    console.log($event);    
  }

}
