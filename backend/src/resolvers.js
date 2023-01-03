const pool= require('./database')

// Define root GraphQL resolvers
const root = {
    members: async () => {
      const result = await pool.query('SELECT * FROM members');
      return result.rows;
    },
    member: async ({ member_id}) => {
      const result = await pool.query('SELECT * FROM members WHERE member_id= $1', [member_id]);
      return result.rows[0];
    },
    groups: async () => {
      const result = await pool.query('SELECT * FROM groups');
      return result.rows;
    },
    group: async ({ group_id }) => {
      const result = await pool.query('SELECT * FROM groups WHERE group_id = $1', [group_id]);
      return result.rows[0];
    },
    group_members: async ({ group_id }) => {
      const result = await pool.query(
        'SELECT m.member_id, m.first_name, m.last_name FROM members m LEFT JOIN group_members gm ON m.member_id = gm.member_id WHERE gm.group_id = $1',
        [group_id]
      );
      return result.rows;
    },
    giving: async ({ member_id }) => {
      if (member_id) {
        const result = await pool.query(
          'SELECT * FROM giving WHERE member_id = $1',
          [member_id]
        );
        return result.rows;
      } else {
        const result = await pool.query('SELECT * FROM giving');
        return result.rows;
      }
    },
    events: async () => {
      const result = await pool.query('SELECT * FROM events');
      return result.rows;
    },
    event: async ({ member_id }) => {
      const result = await pool.query('SELECT * FROM events WHERE member_id = $1', [1]);
      return result.rows[0];
    },
    attendance: async ({ event_id }) => {
      const result = await pool.query(
        'SELECT * FROM attendance WHERE event_id = $1',
        [event_id]
      );
      return result.rows;
    },
    createMember: async ({ first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id  }) => {
      const result = await pool.query(
        'INSERT INTO members (first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *',
        [first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id  ]
      );
      return result.rows[0];
    },
    updateMember: async ({  first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id,member_id }) => {
      const result = await pool.query(
        'UPDATE members SET first_name=$1,last_name=$2,date_of_birth=$3,phone=$4, email=$5, address=$6, city=$7,state=$8,zip=$9,membership_date=$10,parent_id=$11 WHERE member_id=$12 RETURNING *',
        [first_name,last_name,date_of_birth,phone, email, address, city,state,zip,membership_date,parent_id,member_id ] );
        return result.rows[0];
      },
        
    deleteMember: async ({ member_id }) =>{
      const result = await pool.query('DELETE FROM members WHERE member_id = $1 RETURNING *', [
        member_id,
      ]);
      return result.rows[0];
    },
  }

  module.exports = root;
  
  