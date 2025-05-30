import { conformZodMessage } from '@conform-to/zod';
import { Description } from '@radix-ui/react-dialog';

import { z } from 'zod';

export const onboardingSchema =z.object({

    fullName:z.string().min(3).max(150),
    userName:z.string().min(3).max(150).regex(/^[a-zA-Z0-9-]+$/,{
        message:"UserName can only contain letters, numbers and hyphens",
    }),
})

export function onboardingSchemaValidation(options?:{
    isUserNameUnique:()=>Promise<boolean>
}){
return z.object({
    userName:z.string().min(3).max(150).regex(/^[a-zA-Z0-9-]+$/,{
        message:"UserName can only contain letters, numbers and hyphens",
    })
    .pipe(
        z.string().superRefine((_, ctx)=>{
               if(typeof options?.isUserNameUnique !== "function"){
               ctx.addIssue({
                code:"custom",
                message:conformZodMessage.VALIDATION_UNDEFINED,
                fatal: true,
               });
               return
               }

               return options.isUserNameUnique().then((isUnique)=>{
if(!isUnique){
    ctx.addIssue({
        code:"custom",
        message:"UserName already taken",
    })

}
               })

        })
    ),
    fullName:z.string().min(3).max(150),
})
}


export const settingsSchema=z.object({
    fullName:z.string().min(3).max(150),

    profileImage:z.string(),
});

export const eventTypeSchema = z.object({
    title: z.string().min(3).max(150),
    duration :z.number().min(15).max(60),
    url:z.string().min(3).max(300),
    description:z.string().min(3).max(500),
    vdeoCallSoftware:z.string().min(3),
})