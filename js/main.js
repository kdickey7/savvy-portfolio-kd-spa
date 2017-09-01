$('nav ul li').on('click', function(event){
  if(!$(event.target).hasClass('active')) {

  }
})



var request = $.ajax( "https://jsonplaceholder.typicode.com/posts" );

request.then(
    ( data ) => console.log( data )
);

console.log('hello')
