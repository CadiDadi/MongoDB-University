// Connect to our class Atlas cluster from the mongo shell or Compass and view the results.scores collection. How many documents contain at least one score in the results array that is greater than or equal to 70 and less than 80?

{results: {$elemMatch: {$gte: 70, $lt: 80}}}).count()