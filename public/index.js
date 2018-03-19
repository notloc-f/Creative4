var app = new Vue({
  el: '#app',
  data:{
    Monday: [],
    Tuesday:[],
    Wednesday:[],
    Thursday:[],
    Friday:[],
    Saturday:[],
    Sunday:[],
    eventer: '',
    time: '',
    day: '',
  },
  ready(){
    this.getItems();
  },
  computed:{
  },
  methods:{
    getItems: function(){
      axios.get("/api/Monday").then(response => {
        this.Monday=response.data;
        return true;
      }).catch(err => {
      });
      axios.get("/api/Tuesday").then(response => {
        this.Tuesday=response.data;
        return true;
      }).catch(err => {
      });
      axios.get("/api/Wednesday").then(response => {
        this.Thursday=response.data;
        return true;
      }).catch(err => {
      });
      axios.get("/api/Thursday").then(response => {
        this.Friday=response.data;
        return true;
      }).catch(err => {
      });
      axios.get("/api/Friday").then(response => {
        this.Saturday=response.data;
        return true;
      }).catch(err => {
      });
      axios.get("/api/Saturday").then(response => {
        this.Sunday=response.data;
        return true;
      }).catch(err => {
      });
    },
    addEvent: function(){
    if(this.day==='m'){this.addMonday()}
    else if(this.day==='t'){this.addTuesday()}
    else if(this.day==='w'){this.addWednesday()}
    else if(this.day==='th'){this.addThursday()}
    else if(this.day==='f'){this.addFriday()}
    else if(this.day==='s'){this.addSaturday()}
    else if(this.day==='su'){this.addSunday()}
    else{
      alert("not a valid day, please enter m,t,w,th,f,s,su");
    }


    },
    addMonday:function(){
      console.log('made here ');
      axios.post("/api/Monday", {
        eventer: this.eventer,
        time: this.time,
        day: this.day,
      }).then(response => {
        this.eventer = "";
        this.getItems();
        return true;
      }).catch(err => {
      });
       this.Monday.push({eventer: this.eventer,time:this.time,day:this.day});
       this.text = '';
       this.day='';
       this.time='';

    },
    addTuesday:function(){
      console.log('made here ');
      axios.post("/api/Tuesday", {
        eventer: this.eventer,
        time: this.time,
        day: this.day,
      }).then(response => {
        this.eventer = "";
        this.getItems();
        return true;
      }).catch(err => {
      });
       this.Tuesday.push({eventer: this.eventer,time:this.time,day:this.day});
       this.text = '';
       this.day='';
       this.time='';

    },
    addWednesday:function(){
      console.log('made here ');
      axios.post("/api/Wednesday", {
        eventer: this.eventer,
        time: this.time,
        day: this.day,
      }).then(response => {
        this.eventer = "";
        this.getItems();
        return true;
      }).catch(err => {
      });
       this.Wednesday.push({eventer: this.eventer,time:this.time,day:this.day});
       this.text = '';
       this.day='';
       this.time='';

    },
    addThursday:function(){
      console.log('made here ');
      axios.post("/api/Thursday", {
        eventer: this.eventer,
        time: this.time,
        day: this.day,
      }).then(response => {
        this.eventer = "";
        this.getItems();
        return true;
      }).catch(err => {
      });
       this.Thursday.push({eventer: this.eventer,time:this.time,day:this.day});
       this.text = '';
       this.day='';
       this.time='';

    },
    addFriday:function(){
      console.log('made here ');
      axios.post("/api/Friday", {
        eventer: this.eventer,
        time: this.time,
        day: this.day,
      }).then(response => {
        this.eventer = "";
        this.getItems();
        return true;
      }).catch(err => {
      });
       this.Friday.push({eventer: this.eventer,time:this.time,day:this.day});
       this.text = '';
       this.day='';
       this.time='';

    },
    addSaturday:function(){
      console.log('made here ');
      axios.post("/api/Saturday", {
        eventer: this.eventer,
        time: this.time,
        day: this.day,
      }).then(response => {
        this.eventer = "";
        this.getItems();
        return true;
      }).catch(err => {
      });
       this.Saturday.push({eventer: this.eventer,time:this.time,day:this.day});
       this.text = '';
       this.day='';
       this.time='';

    },
    addSunday:function(){
      console.log('made here ');
      axios.post("/api/Sunday", {
        eventer: this.eventer,
        time: this.time,
        day: this.day,
      }).then(response => {
        this.eventer = "";
        this.getItems();
        return true;
      }).catch(err => {
      });
       this.Sunday.push({eventer: this.eventer,time:this.time,day:this.day});
       this.text = '';
       this.day='';
       this.time='';

    },
  },
});
