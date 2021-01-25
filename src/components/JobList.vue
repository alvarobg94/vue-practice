<template>
  <div>
    
    <table id='table'>
     <tr>
       <th>Title</th>
       <th>Field</th>
       <th>Company</th>
       <th>Application deadline</th>
       <th>Priority</th>
       <th>Status</th>
     </tr>    
     <tr v-for="job in joblist_data" :key="job.id">
      <td>{{job.title}}</td>
      <td>{{job.field}}</td>
      <td>{{job.company}}</td>
      <td>{{job.deadline_date}}</td>
      <td>{{job.priority}}</td>
      <td>{{job.status}}</td>
     </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'JobList',
    data: function () {
      return {
        jobdata_default:  [
          {id:1, title:'Software developer', company:'Carlsberg',field:"Software",deadline:'10-01-2021',priority:1,status:"Wish list"},
          {id:2, title:'Software engineer', company:'DIS',field:"Software",deadline:'6-01-2021',priority:3,status:"Applied",},
          {id:3, title:'Manager', company:'Mpeople',field:"Management",deadline:'4-01-2021',priority:2,status:"Applied",}
        ],
        jobdata: [],
        
        
      }
    },
    computed: {
      jwt_token : function() { return this.$store.getters.user_jwt},
      job_user_id : function() { return this.$store.getters.LoggedInUserId},
      joblist_data: function() { return this.$store.getters.joblist},
    },
    mounted() {    },
    methods: {
        show_jobdata: function () {
        console.log(JSON.parse(JSON.stringify(this.joblist_data)));
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#table{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  border-collapse: collapse;
  margin: 40px;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width:90%;
}
#table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
}

#table td, #table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#table tr:nth-child(even){background-color: #f2f2f2;}

#table tr:hover {background-color: #ddd;}


</style>