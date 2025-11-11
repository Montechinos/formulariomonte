export const getErrorMessage = (field: string, errors: Record<string, string>) => {
    return errors[field] || "";
  };
  