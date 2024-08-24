
try{
    hello.toUpperCase();
}catch{
    console.log("エラーが起きてます！！！！")
}

console.log("実行");


function test(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }catch{
        console.log("kkにアクセスできませんでした。");
    }
}



//forEachの使い方

const movies = [
    {
        title: "Amadeus",
        score: "99",
    },
    {
        title: "Stand By Me",
        score: "85",
    },
    {
        title: "Parasite",
        score: "95",
    },
    {
        title: "Alien",
        score: "90",
    },
];

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`);
}
);

for(var item of movies){
    console.log(`${item.title} - ${item.score}/100`);
}

const titles = movies.map(function(movie){
    return console.log(movie.title);
});



// validUserNamesという関数を作りましょう
function validUserNames(strings) {
    return strings.filter(n => n.length < 10);
}

// テスト例
console.log(validUserNames(['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']));
// => ["tanaka", "hogemoge", "kimetsu"]



const prices = [980,1500,1980,4980,2980];

let total = 0;
for (let price of prices){
    total += price;
}
console.log(total);

const P = prices.reduce((total,price) => {
    return total + price;
})

console.log(P);

const M = prices.reduce((min,price) => {
    if(min > price){
        return price;
    }
    return min;
})

console.log(M);