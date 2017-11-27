fetch('http://127.0.0.1:8000/summarizer/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'yourValue',
  })
})
