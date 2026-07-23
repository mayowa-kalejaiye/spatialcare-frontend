const data = {
  message: "hello",
  language: "Auto",
  state: "FCT",
  lga: "AMAC",
  ward: "Wuse"
};

fetch("https://spatialcare-backend.onrender.com/api/chat/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(res => res.text().then(text => ({ status: res.status, text })))
.then(console.log)
.catch(console.error);
