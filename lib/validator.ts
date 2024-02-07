import { z } from "zod"


export const eventFormSchema = z.object({
  title: z.string().min(3, 'Title should be atleast 3 chareters bozo boy'),

  description: z.string().min(3, 'Description should be atleast 3 chareters bozo boy').max(400, 'Description should be less than 400 chareters bozo boy'),

  location: z.string().min(3, 'Location should be atleast 3 characters').max(50, 'that location cant be real gang'),

  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})
