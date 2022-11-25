// Problem-4

let ratingData=[
    {restaurant :'KFC' , rating:5},
    {restaurant : 'Burger King',rating:4},
    {restaurant : 'KFC' ,rating :3},
    {restaurant : 'Domino' , rating:2},
    {restaurant : 'Subway', rating:3},
    {restaurant : 'Domino' , rating:1},
    {restaurant : 'Subway',rating:4},
    {restaurant : 'Pizza Hut',rating:5}
]
//  Problem -4a To Calculate Average Rating for all Restaurants

let distinct = [];
for(i=0;i<ratingData.length;i++){
    if(distinct.indexOf(ratingData[i].restaurant)===-1){
        distinct.push(ratingData[i].restaurant)
    }
}
console.log(distinct);
// [ 'KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut' ]

let unique = [ 'KFC', 
               'Burger King', 
               'Domino', 
               'Subway',
               'Pizza Hut'
             ]

let avgRating = [];
let outRating = 0;
let count = 0;
for(i=0;i<unique.length;i++){
    for(j=0;j<ratingData.length;j++){
        if(unique[i] == ratingData[j].restaurant){
            outRating += ratingData[j].rating;
            count +=1;
        }
    }
    let output =Number(outRating)/Number(count);
    let myObj = {};
    myObj.restaurant = unique[i];
    myObj.averageRating =output;
    avgRating.push(myObj);
    count = 0;
    outRating = 0;
}             
 console.log(avgRating)
//  [
//   { restaurant: 'KFC', avgrageRating: 4 },
//   { restaurant: 'Burger King', avgrageRating: 4 },
//   { restaurant: 'Domino', avgrageRating: 1.5 },
//   { restaurant: 'Subway', avgrageRating: 3.5 },
//   { restaurant: 'Pizza Hut', avgrageRating: 5 }
// ]

// ************* Problem -4b List all Restaurants Average Rating >4 ***********
for( i=0;i<avgRating.length;i++){
    
    if(avgRating[i]>=4){
        console.log(`Restu ${avgRating[i]}`);
    
     }
     else{
        console.log("error");
     }
    
     
} 