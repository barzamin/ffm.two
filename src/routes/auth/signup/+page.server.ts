import type { Actions } from './$types';

export const actions: Actions = {
    default: async (ev) => {
        const fd = await ev.request.formData();
        const email = fd.get('email');
        const password = fd.get('password');
    },
};
