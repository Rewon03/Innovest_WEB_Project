// Initialize EmailJS with public key
(function() {
    emailjs.init("3GdVDv8i8ujUUUDrL");
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('startup-submission-form');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

        // Get form data
        const formData = new FormData(form);
        const startupData = {
            to_email: 'newa.rewon@gmail.com', // Replace with your email
            from_name: formData.get('founder_name'),
            company_name: formData.get('company_name'),
            website: formData.get('website'),
            industry: formData.get('industry'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            description: formData.get('description'),
            funding_stage: formData.get('funding_stage'),
            funding_needed: formData.get('funding_needed'),
            pitch: formData.get('pitch'),
            submission_date: new Date().toLocaleString()
        };

        // Send email using EmailJS
        emailjs.send(
            'service_8i8p6xc',
            'template_vea8z0p',
            startupData
        )
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            Swal.fire({
                icon: 'success',
                title: 'Submission Successful!',
                text: 'Thank you for submitting your startup. We will review your submission and get back to you soon.',
                confirmButtonColor: '#007bff'
            });

            // Reset form and button
            form.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = 'Submit';
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            
            // Show detailed error message
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'There was an error submitting your startup. Please check your internet connection and try again. If the problem persists, please contact support.',
                confirmButtonColor: '#dc3545'
            });

            // Reset button
            submitButton.disabled = false;
            submitButton.innerHTML = 'Submit';
        });
    });
}); 