// regex = Regular Expression
    // the / / = delimit the regular expression 
    // the carat symbol, ^, means start at the beginning of the field
    // the . is a wildcard for any character
    // the * means any number of times


db.movieDetails.find({}, {_id: 0, "title": 1, "awards.text": 1}).pretty()


db.movieDetails.find({"awards.text": {$regex: /^Won .* /}}, {_id: 0, title: 1, "awards.text": 1}).pretty()

// so /^Won .*/ means the field needs to start with "Won ", followed by anything (any characters & any number of characters)


// /^Won.*/ - would allow words like Wonder, but with the space after the n, the first word must be Won, followed by a space
// 1
db.movieDetails.updateOne({"title": "Midnight Cowboy"}, {$set: {"awards.text": "Wonderoniful"}})
// 2
db.movieDetails.find({"title": "Midnight Cowboy"}, {_id: 0, title: 1, "awards.text": 1}).pretty()
// returns:
{ "title" : "Midnight Cowboy", "awards" : { "text" : "Wonderoniful" } }