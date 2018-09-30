let beatles = [
  {
    name: "John",
    nickname: "The Smart One"
  },
  {
    name: "Ringo",
    nickname: "The Funny One"
  },
  {
    name: "Paul",
    nickname: "The Cute One"
    },
  {
    name: "george",
    nickname: "The Quiet One"
  }
];

beatles.forEach( beatle => {
   switch (beatles) {
     case "The Smart One":
       console.log(beatles.name);
       break;
       case "The Funny One":
         console.log(beatles.name);
         break;
         case "The Cute One":
           console.log(beatles.name);
           break;
           case  "The Quiet One":
             console.log(beatles.name);
             break;

   }
}) ;

beatles.forEach( beatle => {
  console.log( "Hi, I'm " + beatle.name + ".  I'm " + beatle.nickname + "!" );
});
