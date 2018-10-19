
export const typeDefs = `

type Address{
  type: String!
  addressLine1: String!
  addressLine2: String
  city: String!
  pincode: Int!
  state: ID!
  country: ID!
}

type College{
  username: String!
  name: String!
  website: String
  address: Address!
  headquarters: [String]
  affiliation: String
  description: String
  founderName: String
  yearFounded: String!
  numOfStudents: Int
}

  type Query {
    college: [College]
  }

  type Mutation{
    createCollege(
      username: String!,
      name: String!,
      website: String,
      address: Address!,
      headquarters: [String],
      affiliation: String,
      description: String,
      founderName: String,
      yearFounded: String!,
      numOfStudents: Int
    ): University
    removeCollege(id: String!):String!
    updateCollege(id: String!):String
  }
  `;