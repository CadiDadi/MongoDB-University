boxOffice: [ { "country": "USA", "revenue": 228.4 },
             { "country": "Australia", "revenue": 19.6 },
             { "country": "UK", "revenue": 33.9 },
             { "country": "Germany", "revenue": 16.2 },
             { "country": "France", "revenue": 19.8 } ]

db.movieDetails.find({"boxOffice.country": "Germany", "boxOffice.revenue": {$gt: 17}})

db.movieDetails.find({"boxOffice.country": "Germany", "boxOffice.revenue": {$gt: 228}})


////////
// 1
use video
// 2
martian = db.movieDetails.findOne({title: "The Martian"})
// 3
martian
// 4
delete martian._id;
// 5
martian
// 6
martian.boxOffice = [
    {"country": "USA", "revenue": 228.4},
    {"country": "Australia", "revenue": 19.6},
    {"country": "UK", "revenue": 33.9},
    {"country": "Germany", "revenue": 16.2},
    {"country": "France", "revenue": 19.8}
]
// 7
db.movieDetails.insertOne(martian).pretty()
// 8
db.movieDetails.find({boxOffice: {$elemMatch: {"country": "Germany", "revenue": {$gt: 17}}}}).pretty()  //returns 0 matches
// 9
db.movieDetails.find({boxOffice: {$elemMatch: {"country": "Germany", "revenue": {$gt: 16}}}}).pretty()


// quiz problem
// How many documents in the results.surveys collection contain a score of 7 for the product, "abc"?
    {results: {$elemMatch: {product: "abc", score: 7}}}