export const getFormData = async({request}) => {
    const data = await request.formData();
    let formData = Object.fromEntries(data);
    console.log(formData);
    return null;
}