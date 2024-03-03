function displayMessage() {
    var emailInput = document.getElementById("exampleInputEmail1");

    if (emailInput.hasAttribute('required')) {
      window.alert("Please enter your email address.");
      event.preventDefault();
    } else {
      window.alert("Thank you for subscribing to our newsletter!");
    }
  }
  const plans = document.querySelectorAll('.card');
  plans.forEach(plan => {
    plan.addEventListener('click', function () {
      plans.forEach(p => p.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  const typed = new Typed('.mul', { // select the class mul
    strings: [ ' Adventurer',' Entrepreneur'], // array strings
    typeSpeed: 100, // typing speed
    backSpeed: 100,
    backDelay: 100,
    loop: true // loop the strings
});

