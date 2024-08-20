{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function fetchDropdownOptions() \{\
  fetch('https://script.google.com/a/macros/audigent.com/s/AKfycbxjcTepxod05YGEXvyRNkgBj8JTg47hxelguoew-ymU1l7uryRMh9Vr21FiiT67jGD0/exec) // Replace with your script URL\
    .then(response => response.json())\
    .then(data => \{\
      // Populate product name dropdown\
      const productNameSelect = document.getElementById('productName');\
      data.productNames.forEach(productName => \{\
        const option = document.createElement('option');\
        option.value = productName;\
        option.text = productName;\
        productNameSelect.appendChild(option);\
      \});\
\
      // Populate channel dropdown (and other dropdowns similarly)\
      const channelSelect = document.getElementById('channel');\
      data.channelOptions.forEach(channel => \{\
        const option = document.createElement('option');\
        option.value = channel;\
        option.text = channel;\
        channelSelect.appendChild(option);\
      \});\
    \})\
    .catch(error => \{\
      console.error('Error fetching dropdown options:', error);\
    \});\
\}\
\
window.onload = fetchDropdownOptions;}