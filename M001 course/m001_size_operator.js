$size - limits to x # of results per field

db.movieDetails.find({countries: {$size: 1}}).pretty()
