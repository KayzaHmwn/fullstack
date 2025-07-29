fetch("http://54.252.233.46:5000/data")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  })
  .catch((err) => {
    document.getElementById("output").textContent = "Gagal mengambil data 😢";
    console.error(err);
  });
