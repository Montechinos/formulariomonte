import { z } from 'zod';
import { AUTH_MESSAGES } from '../constants/messages';

// Schema para Login
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, AUTH_MESSAGES.VALIDATION.EMAIL_REQUIRED)
    .email(AUTH_MESSAGES.VALIDATION.EMAIL_INVALID),
  password: z
    .string()
    .min(1, AUTH_MESSAGES.VALIDATION.PASSWORD_REQUIRED)
    .min(8, AUTH_MESSAGES.VALIDATION.PASSWORD_MIN),
});

// Schema para Registro
export const registerSchema = z
  .object({
    nombre: z
      .string()
      .min(1, AUTH_MESSAGES.VALIDATION.NAME_REQUIRED)
      .min(2, AUTH_MESSAGES.VALIDATION.NAME_MIN)
      .max(50, AUTH_MESSAGES.VALIDATION.NAME_MAX),
    email: z
      .string()
      .min(1, AUTH_MESSAGES.VALIDATION.EMAIL_REQUIRED)
      .email(AUTH_MESSAGES.VALIDATION.EMAIL_INVALID),
    password: z
      .string()
      .min(1, AUTH_MESSAGES.VALIDATION.PASSWORD_REQUIRED)
      .min(8, AUTH_MESSAGES.VALIDATION.PASSWORD_MIN)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        AUTH_MESSAGES.VALIDATION.PASSWORD_COMPLEXITY
      ),
    confirmPassword: z
      .string()
      .min(1, AUTH_MESSAGES.VALIDATION.CONFIRM_PASSWORD_REQUIRED),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: AUTH_MESSAGES.VALIDATION.PASSWORDS_NOT_MATCH,
    path: ['confirmPassword'],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
