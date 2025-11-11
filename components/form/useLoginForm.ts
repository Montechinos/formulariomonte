import { useState } from "react";
import { z } from "zod";
import { loginSchema } from "@/lib/validations/authSchemas";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    setErrors({});
    try {
      const validatedData = loginSchema.parse({ email, password });
      return { valid: true, data: validatedData };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { email?: string; password?: string } = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as string;
          fieldErrors[field as keyof typeof fieldErrors] = err.message;
        });
        setErrors(fieldErrors);
      }
      return { valid: false };
    }
  };

  return { email, setEmail, password, setPassword, errors, validate };
};
