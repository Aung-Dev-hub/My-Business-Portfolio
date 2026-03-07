export const sendContactForm = async (formData: FormData) => {
  formData.append("access_key", "338da270-e43d-436f-ae8e-7e4f3b455002");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data;
};