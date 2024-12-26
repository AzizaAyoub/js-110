// Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: remove everything starting from the beginning of 
// house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";


console.log(advice.slice(0, advice.indexOf('house')));
// => 'Few things in life are as important as '

/*
The slice method is used in this case to take a copy of the specific string which is starts from 0 
counting to the index of string "house", and also indexOf method is used to determine the index of 
string "house"
*/