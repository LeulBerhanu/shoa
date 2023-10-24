function siteValidation(formData) {
  const errors = {};

  if (!formData.title.trim()) {
    errors.title = "* Title is required";
  }

  if (!formData.body.trim()) {
    errors.body = "* Description is required";
  }

  if (!formData.readTime.trim()) {
    errors.readTime = "* Read-time is required";
  }

  return errors;
}

export default siteValidation;
