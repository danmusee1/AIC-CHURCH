const { buildSchema } = require('graphql');
// Define the GraphQL schema
const schema = buildSchema(`
type Query {
  members: [Member]
  member(member_id: Int): Member
 
  pastorals: [Pastoral]
  pastoral(pastoral_id: Int): Pastoral

  groups: [Group]
  group(group_id: Int!): Group
  group_members(group_id: Int!): [Member]
  giving(member_id: Int): [Giving]
  events: [Event]
  event(event_id: Int!): Event
  attendance(event_id: Int!): [Attendance]
}




type Mutation {
  createPastoral(
    pastoral_id: Int
    first_name: String!
    last_name: String!
    position:String!
    mission: String!
  ):Pastoral

  updatePastoral(
    pastoral_id: Int!
    first_name: String
    last_name: String
    position:String
    mission: String
  ): Pastoral

  createMember(
    member_id: Int,
    first_name: String!
    last_name: String!
    date_of_birth: String!
    phone: String!
    email: String!
    address: String!
    city: String!
    state: String!
    zip: String!
    membership_date: String!
    parent_id: Int
    ): Member



  updateMember(member_id: Int! 
    first_name: String
    last_name: String
    date_of_birth: String
    phone: String
    email: String
    address: String
    city: String
    state: String
    zip: String
    membership_date: String
    parent_id: Int): Member

  deleteMember(member_id: Int!): Member

  
  createGroup(group_name: String!, group_type:String!,group_description:String!, group_leader: Int!): Group
  updateGroup(group_id: Int!, group_name: String,group_type:String,group_description:String, group_leader: Int): Group
  deleteGroup(group_id: Int!): Group

  addGroupMember(group_id: Int!, member_id: Int!): GroupMember
  removeGroupMember(groupId: Int!, memberId: Int!): GroupMember

  recordDonation(memberId: Int!, amount: Float!, date: String!): Giving

  createEvent(name: String!, date: String!): Event
  updateEvent(id: Int!, name: String, date: String): Event
  deleteEvent(id: Int!): Event
  checkIn(eventId: Int!, memberId: Int!): Attendance
}

type Member {
  member_id: Int
  first_name: String
  last_name: String
  date_of_birth: String
  phone: String
  email: String
  address: String
  city: String
  state: String
  zip: String
  membership_date: String
  parent_id: Int
}

type Pastoral {
  pastoral_id: Int
  first_name: String
  last_name: String
  position:String
  mission: String
}


type Group {
  group_id: Int!
  group_name: String!
  group_type: String!
  group_description: String
  group_leader:Member!
  group_members: [Member]
}

type GroupMember {
  group_id: Group!
  member_id: Member!
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
module.exports = schema;