function phoneticLookup(val) {
  

  let obj = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = obj[val];

  return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup("charlie"));