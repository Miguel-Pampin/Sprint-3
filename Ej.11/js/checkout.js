
// Exercise 6
function validate(event) {
	
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	/* let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone"); */
	document.getElementById('fName').classList.remove('is-invalid');
	document.getElementById('fLastN').classList.remove('is-invalid');
	document.getElementById('fEmail').classList.remove('is-invalid');
	document.getElementById('fAddress').classList.remove('is-invalid');
	document.getElementById('fPassword').classList.remove('is-invalid');
	document.getElementById('fPhone').classList.remove('is-invalid');


	// Validate fields entered by the user: name, phone, password, and email

	const letters = /^[A-Za-z]+$/;
	const numbers = /^[0-9]+$/;
	const letterNumber = /^[0-9a-zA-Z]+$/;
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (fName.value == '' || fName.value.length <= 3 || !fName.value.match(letters)) {
		document.getElementById('fName').classList.add('is-invalid');
		
	}
	if (fEmail.value == '' || fEmail.length <= 3 || !fEmail.value.match(mailformat)) {
		document.getElementById('fEmail').classList.add('is-invalid');
		
	}
	if (fPhone.value == '' || fPhone.length <= 3 || !fPhone.value.match(numbers)) {
		document.getElementById('fPhone').classList.add('is-invalid');
		
	}
	if (fPassword.value == '' || fPassword.length <= 3 || !fPassword.value.match(letterNumber)) {
		document.getElementById('fPassword').classList.add('is-invalid');
		
	}
	if (fAddress.value == '' || fAddress.length <= 3) {
		document.getElementById('fAddress').classList.add('is-invalid');
	
	}
	if (fLastN.value == '' || fLastN.length <= 3) {
		document.getElementById('fLastN').classList.add('is-invalid');
		
	}
	
	event.preventDefault();
     event.stopPropagation();

}
