function siteValidation(formData, image, site) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "* Title is required";
  }

  if (!formData.price) {
    errors.price = "* Price is required";
  }

  if (!formData.size.trim()) {
    errors.size = "* Size is required";
  }

  if (!formData.bedRoom) {
    errors.bedRoom = "* Bedroom is required";
  }

  if (!formData.bathRoom) {
    errors.bathRoom = "* Bathroom is required";
  }

  if (!formData.buildingStatus.trim()) {
    errors.buildingStatus = "* Building status is required";
  }

  if (!formData.sellingStatus.trim()) {
    errors.sellingStatus = "* Selling status is required";
  }

  if (!formData.description.trim()) {
    errors.description = "* Description is required";
  }

  if (!formData.mapLocation.trim()) {
    errors.mapLocation = "* Map location is required";
  }

  if (formData.featured && !formData.featuredStatement.trim()) {
    errors.featuredStatement = "* Featured statement is required";
  }

  if (!formData.propertyType) {
    errors.propertyType = "* Property type is required";
  }

  if (!site) {
    errors.site = "* Site is required";
  }

  if (!image) {
    errors.image = "* Image is required";
  }

  return errors;
}

export default siteValidation;
