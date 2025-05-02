import { z } from 'zod';

export const onboardingSchema =z.object({

    fullName:z.string().min(3).max(150),
    userName:z.string().min(3).max(150).regex(/^[a-zA-Z0-9-]+$/,{
        message:"UserName can only contain letters, numbers and hyphens",
    }),
})

