

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

console.log(moo);    
console.log(neigh);  
console.log(baa);    
console.log(oink); 
console.log(cluck);  

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

const [bessie,, dolly, babe, little] = farmAnimals.split(' ');


console.log(bessie);  // Output: 'cow'
console.log(dolly);   // Output: 'horse'
console.log(babe);    // Output: 'sheep'
console.log(little);  // Output: 'pig'


// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

const [blackAndWhite, ,black, pink] = farmAnimals.split(' ');

console.log(blackAndWhite);  // Output: 'cow'
console.log(black);         // Output: 'sheep'
console.log(pink);          // Output: 'pig'


// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = colors

console.log(red);  // Output: 'red'
console.log(orange);  // Output: 'orange'
console.log(yellow);  // Output: 'yellow'
console.log(green);  // Output: 'green'
console.log(blue);  // Output: 'blue'
console.log(indigo);  // Output: 'indigo'
console.log(violet);  // Output: 'violet'

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, , v] = colors;

console.log(r);
console.log(o);  // Output: 'orange'
console.log(y);  // Output: 'yellow'
console.log(g);  // Output: 'green'
console.log(b);  // Output: 'blue'
console.log(v);  // Output: 'violet'

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const [, , , , , indg] = colors;

console.log(indg);  // Output: 'indigo'

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const {
  muppetName,
  color,
  song,
  job,
  partner
} = muppet;

console.log(muppetName);  // Output: 'Miss Piggy'
console.log(color);      // Output: 'pink'
console.log(song);       // Output: 'Never Before, Never Again'
console.log(job);        // Output: 'Cast member of The Muppet Show'
console.log(partner);    // Output: 'Kermit'

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

console.log(song2);        // Output: 'Moving Right Along'
console.log(song4);        // Output: 'I Hope That Something Better Comes Along'
console.log
