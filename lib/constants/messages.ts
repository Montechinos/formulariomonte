export const AUTH_MESSAGES = {
    // ✅ Éxito
    SUCCESS_REGISTER: 'Cuenta creada correctamente.',
    SUCCESS_LOGIN: 'Inicio de sesión exitoso.',
    SUCCESS_LOGOUT: 'Sesión cerrada correctamente.',
  
    // ⚠️ Errores generales de Firebase
    UNKNOWN_ERROR: 'Ocurrió un error inesperado. Intenta nuevamente.',
    INVALID_CREDENTIALS: 'Correo o contraseña incorrectos.',
    USER_NOT_FOUND: 'No existe una cuenta con este correo.',
    WRONG_PASSWORD: 'Contraseña incorrecta.',
    EMAIL_ALREADY_IN_USE: 'Este correo ya está registrado.',
    WEAK_PASSWORD: 'La contraseña es demasiado débil.',
    TOO_MANY_REQUESTS: 'Demasiados intentos. Intenta más tarde.',
    NETWORK_ERROR: 'Error de conexión. Verifica tu red.',
  
    // 🧩 Validaciones (para usar en Zod o mostrar en los Text)
    VALIDATION: {
      EMAIL_REQUIRED: 'El correo es requerido.',
      EMAIL_INVALID: 'Ingresa un correo válido.',
      PASSWORD_REQUIRED: 'La contraseña es requerida.',
      PASSWORD_MIN: 'La contraseña debe tener al menos 8 caracteres.',
      PASSWORD_COMPLEXITY:
        'Debe contener mayúsculas, minúsculas, un número y un carácter especial.',
      NAME_REQUIRED: 'El nombre es requerido.',
      NAME_MIN: 'El nombre debe tener al menos 2 caracteres.',
      NAME_MAX: 'El nombre no puede exceder 50 caracteres.',
      CONFIRM_PASSWORD_REQUIRED: 'Debes confirmar tu contraseña.',
      PASSWORDS_NOT_MATCH: 'Las contraseñas no coinciden.',
    },
  };