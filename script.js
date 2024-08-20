function fetchDropdownOptions() {
  fetch('https://script.google.com/macros/s/AKfycbxjcTepxod05YGEXvyRNkgBj8JTg47hxelguoew-ymU1l7uryRMh9Vr21FiiT67jGD0/exec') // Replace with your script URL
    .then(response => response.json())
    .then(data => {
      // Populate product name dropdown
      const productNameSelect = document.getElementById('productName');
      data.productNames.forEach(productName => {
        const option = document.createElement('option');
        option.value = productName;
        option.text = productName;
        productNameSelect.appendChild(option);
      });

      // Populate channel dropdown (and other dropdowns similarly)
      const channelSelect = document.getElementById('channel');
      data.channelOptions.forEach(channel => {
        const option = document.createElement('option');
        option.value = channel;
        option.text = channel;
        channelSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error fetching dropdown options:', error);
      // Handle error, e.g., display an error message to the user
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'An error occurred while loading dropdown options. Please try again later.';
      document.body.appendChild(errorMessage);
    });
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    dealID: document.getElementById('dealID').value,
    dealName: document.getElementById('dealName').value,
    masterClient: document.getElementById('masterClient').value,
    productName: document.getElementById('productName').value,
    channel: document.getElementById('channel').value,
    // Add other form fields as needed
  };

  fetch('https://script.google.com/macros/s/AKfycbxjcTepxod05YGEXvyRNkgBj8JTg47hxelguoew-ymU1l7uryRMh9Vr21FiiT67jGD0/exec', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.text())
  .then(data => {
    console.log('Success:', data);
    // Handle successful submission, e.g., display a success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Form submitted successfully!';
    document.body.appendChild(successMessage);
  })
  .catch(error => {
    console.error('Error submitting form:', error);
    // Handle error, e.g., display an error message to the user
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'An error occurred while submitting the form. Please try again later.';
    document.body.appendChild(errorMessage);
  });
}

window.onload = fetchDropdownOptions;

const form = document.getElementById('dealForm');
form.addEventListener('submit', handleSubmit);
