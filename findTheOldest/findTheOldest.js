const people = [
    {
      name: 'Carly',
      yearOfBirth: 2018,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    }
]


let findTheOldest = function(people) {

    const calculateAge = people.map((person) => {
        if (person.yearOfDeath === undefined) {
            age = new Date().getFullYear() - person.yearOfBirth 
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth
        }
        person.age = age
    })

    people.sort((a,b) => b.age - a.age)
    console.log(people)

}

module.exports = findTheOldest
