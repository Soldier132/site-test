import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  email: z.string().email("Неверный email"),
  company: z.string().optional(),
  message: z.string().min(20, "Сообщение слишком короткое"),
  website: z.string().max(0).optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
