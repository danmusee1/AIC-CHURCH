const { buildSchema } = require('graphql');
// Define the GraphQL schema
const schema = buildSchema(`
type Query {
  members: [Member]
  member(id: Int!): Member
  groups: [Group]
  group(id: Int!): Group
  groupMembers(groupId: Int!): [Member]
  giving(memberId: Int): [Giving]
  events: [Event]
  event(id: Int!): Event
  attendance(eventId: Int!): [Attendance]
}

type Mutation {
  createMember(name: String!, email: String, phone: String): Member
  updateMember(id: Int!, name: String, email: String, phone: String): Member
  deleteMember(id: Int!): Member
  createGroup(name: String!, leaderId: Int!): Group
  updateGroup(id: Int!, name: String, leaderId: Int): Group
  deleteGroup(id: Int!): Group
  addGroupMember(groupId: Int!, memberId: Int!): GroupMember
  removeGroupMember(groupId: Int!, memberId: Int!): GroupMember
  recordDonation(memberId: Int!, amount: Float!, date: String!): Giving
  createEvent(name: String!, date: String!): Event
  updateEvent(id: Int!, name: String, date: String): Event
  deleteEvent(id: Int!): Event
  checkIn(eventId: Int!, memberId: Int!): Attendance
}

type Member {
  id: Int!
  name: String!
  email: String
  phone: String
}

type Group {
  id: Int!
  name: String!
  leader: Member
  members: [Member]
}

type GroupMember {
  group: Group!
  member: Member!
}

type Giving {
  id: Int!
  member: Member!
  amount: Float!
  date: String!
}

type Event {
  id: Int!
  name: String!
  date: String!
}

type Attendance {
  id: Int!
  event: Event!
  member: Member!
  checkedInAt: String!
}


`);