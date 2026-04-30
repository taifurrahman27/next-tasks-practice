export const CreateATask = async (formData) => {
    'use server';

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');
    const message = formData.get('message');

    console.log(name, "adding name");

}