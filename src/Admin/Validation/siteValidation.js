function siteValidation(formData, image) {
  const errors = {};

  if (!formData.title.trim()) {
    errors.title = "* Title is required";
  }

  if (!image) {
    errors.image = "* Image is required";
  }

  if (!formData.location.trim()) {
    errors.location = "* Location is required";
  }

  return errors;
}

export default siteValidation;
