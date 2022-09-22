const createForm = document.querySelector("#createForm");

createForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const traveldestination = {
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
    dateFrom: document.querySelector("#dateFrom").value,
    dateTo: document.querySelector("#dateTo").value,
    country: document.querySelector("#country").value,
    location: document.querySelector("#location").value,
    googleMapsLink: document.querySelector("#googleMapsLink").value,
};

  console.log(traveldestination)
  
  const response = await postData(traveldestination);
  console.log(response);

  if (response.status === 200) {
    clearForm();
  }
});


async function postData(traveldestination) {
    const response = await fetch("http://127.0.0.1:3000/traveldestination", {
      method: "POST",
      body: JSON.stringify(traveldestination),
      headers: {
        "Content-Type": "application/json"
    }
    });
    return response;
}

async function getData() {
    const response = await fetch("http://127.0.0.1:3000/");
    const body = await response.json();
    console.log(body)
    return body;
  }
