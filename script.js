{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function handleSubmit(event) \{\
  event.preventDefault();\
\
  const formData = \{\
    dealID: document.getElementById('dealID').value,\
    dealName: document.getElementById('dealName').value,\
    masterClient: document.getElementById('masterClient').value,\
    productName: document.getElementById('productName').value,\
    channel: document.getElementById('channel').value,\
    // Add other form fields as needed\
  \};\
\
  fetch('https://script.google.com/a/macros/audigent.com/s/AKfycbxjcTepxod05YGEXvyRNkgBj8JTg47hxelguoew-ymU1l7uryRMh9Vr21FiiT67jGD0/exec', \{\
    method: 'POST',\
    body: JSON.stringify(formData),\
    headers: \{\
      'Content-Type': 'application/json'\
    \}\
  \})\
  .then(response => response.text())\
  .then(data => \{\
    console.log('Success:', data);\
    // Handle successful submission, e.g., display a success message\
  \})\
  .catch(error => \{\
    console.error('Error:', error);\
    // Handle error, e.g., display an error message\
  \});\
\}\
\
const form = document.getElementById('dealForm');\
form.addEventListener('submit', handleSubmit);}
