function fetchDropdownOptions() {
  fetch('https://script.google.com/macros/s/AKfycbx0og8vJoHjBpEegb44GKLFMOETaOB4UR3PZ8CfFPBC-wI7Z4TKgPUqR790PoSv3GZ-/exec') // Replace with your script URL
    .then(response => response.json())
    .then(data => {
      // Populate dropdown options
      const productNameSelect = document.getElementById('productName');
      const channelSelect = document.getElementById('channel');
      const masterClientSelect = document.getElementById('masterClient');
      const dspSelect = document.getElementById('dsp');
      const sspSelect = document.getElementById('ssp');
      const statusSelect = document.getElementById('status');
      const accountClassificationSelect = document.getElementById('accountClassification');

      data.productNames.forEach(productName => {
        const option = document.createElement('option');
        option.value = productName;
        option.text = productName;
        productNameSelect.appendChild(option);
      });

      data.channelOptions.forEach(channel => {
        const option = document.createElement('option');
        option.value = channel;
        option.text = channel;
        channelSelect.appendChild(option);
      });

      // Populate other dropdown options similarly

      data.masterClientOptions.forEach(masterClient => {
        const option = document.createElement('option');
        option.value = masterClient;
        option.text = masterClient;
        masterClientSelect.appendChild(option);
      });

      data.dspOptions.forEach(dsp => {
        const option = document.createElement('option');
        option.value = dsp;
        option.text = dsp;
        dspSelect.appendChild(option);
      });

      data.sspOptions.forEach(ssp => {
        const option = document.createElement('option');
        option.value = ssp;
        option.text = ssp;
        sspSelect.appendChild(option);
      });

      data.statusOptions.forEach(status => {
        const option = document.createElement('option');
        option.value = status;
        option.text = status;
        statusSelect.appendChild(option);
      });

      data.accountClassificationOptions.forEach(accountClassification => {
        const option = document.createElement('option');
        option.value = accountClassification;
        option.text = accountClassification;
        accountClassificationSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error fetching dropdown options:', error);
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
    dsp: document.getElementById('dsp').value,
    ssp: document.getElementById('ssp').value,
    status: document.getElementById('status').value,
    accountClassification: document.getElementById('accountClassification').value,
    // Add other form fields as needed
  };

  fetch('https://script.google.com/macros/s/AKfycbx0og8vJoHjBpEegb44GKLFMOETaOB4UR3PZ8CfFPBC-wI7Z4TKgPUqR790PoSv3GZ-/exec', {
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
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error, e.g., display an error message
  });
}

window.onload = fetchDropdownOptions;

const form = document.getElementById('dealForm');
form.addEventListener('submit', handleSubmit);
