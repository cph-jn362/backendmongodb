const updateForm = document.querySelector("#updateForm");

updateForm.addEventListener("submit", async (event) => {
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



function putSpecificContact(id, contact) {
  console.log(id, contact);
  const response = fetch(url + "/" + "id", {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json",
    }
  });
  return response;
}