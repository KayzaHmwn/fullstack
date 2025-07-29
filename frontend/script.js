fetch("http://54.252.233.46:5000/data")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("data-box").textContent = JSON.stringify(data, null, 2);
  })
  .catch((error) => {
    document.getElementById("data-box").textContent = "Gagal ambil data: " + error;
  });
