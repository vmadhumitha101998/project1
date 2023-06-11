document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupLink = document.getElementById('signup-link');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const homeLink = document.getElementById('home-link');
    const createLink = document.getElementById('create-link');
    const browseLink = document.getElementById('browse-link');
    const mainSection = document.getElementById('content');
    const createSection = document.getElementById('create');
    const browseSection = document.getElementById('browse');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Perform login validation here
      // You can use localStorage, cookies, or send an API request to validate credentials
  
      // For demonstration purposes, assume successful login
      showHomePage();
    });
  
    signupLink.addEventListener('click', function(event) {
      event.preventDefault();
      showSignupPage();
    });
  
    forgotPasswordLink.addEventListener('click', function(event) {
      event.preventDefault();
      showForgotPasswordPage();
    });
  
    homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      showHomePage();
    });
  
    createLink.addEventListener('click', function(event) {
      event.preventDefault();
      showCreateRecipePage();
    });
  
    browseLink.addEventListener('click', function(event) {
      event.preventDefault();
      showBrowseRecipesPage();
    });
  
    function showHomePage() {
      mainSection.style.display = 'block';
      createSection.style.display = 'none';
      browseSection.style.display = 'none';
    }
  
    function showCreateRecipePage() {
      mainSection.style.display = 'none';
      createSection.style.display = 'block';
      browseSection.style.display = 'none';
    }
  
    function showBrowseRecipesPage() {
      mainSection.style.display = 'none';
      createSection.style.display = 'none';
      browseSection.style.display = 'block';
    }
  });
  