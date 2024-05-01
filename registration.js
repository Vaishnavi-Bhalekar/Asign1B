document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
  
    // Create user object
    var user = {
      username: username,
      email: email
    };
  
    // Push user data to localStorage (or you can use AJAX POST method here)
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  
    // Redirect to new page to display user list
    window.location.href = 'userlist.html';
  });
  