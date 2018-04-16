var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: 0
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email:{
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
})


// var newTodo = new Todo({
//   text: "cook dinner",
// })
//
// newTodo.save().then((doc) => {
//   console.log(doc)
// }, (e) => {
//   console.log("unable to save todo")
// })

var newUser = new User({
  email: "me@email.com"
})

newUser.save().then((doc) => {
  console.log(doc)
}, (e) => {
  console.log("unable to save user")
})
