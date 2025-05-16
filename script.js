function getFormvalue() {
  // Get the form
  const form = document.getElementById("form1");

  // Get input values
  const firstName = form.fname.value.trim();
  const lastName = form.lname.value.trim();

  // Combine and alert
  alert(firstName + " " + lastName);

  // Prevent form from reloading the page
  return false;
}
