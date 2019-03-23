new Vue({
  el: "#top",
  data: {
    userCount: 4,
    users: [],
    currentHighRes: "",
    nationalityFlag: "",
    nationalities: []
  },
  methods: {
    getUser() {
      // Be sure to use BACKquotes for the following string
      // Must use "this." prefix when refering to data/variables
      fetch(
        `https://randomuser.me/api?results=${this.userCount}&nat=${
          this.nationalities
        }`
      )
        .then(r => r.json()) // convert the response 'r' to a JSON object
        .then(u => {
          // This will show a JSON string inside the <div> defined above
          this.users = u.results;
        });
    },
    resetUser: function() {
      this.users = [];
    },
    resetHighRes: function() {
      this.currentHighRes = "";
    },
    setHighRes: function(u) {
      this.currentHighRes = u.picture.large;
    }
  }
});
