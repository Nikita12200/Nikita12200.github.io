function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const comments = document.getElementById("comments").value;

    if (name.trim() === "" || contact.trim() === "" || comments.trim() === "") {
        alert("Please fill out all the fields.");
    } else {
        const formData = {
            name: name,
            contact: contact,
            comments: comments
        };
        alert("Form submitted successfully!\n\n" );
        document.getElementById("feedbackForm").reset();
    }
}