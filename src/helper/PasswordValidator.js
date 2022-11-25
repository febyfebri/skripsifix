export function PasswordValidator(password) {
    if (!password) return "Password tidak boleh kosong."
    if (password.length < 8) return 'Password harus 8 huruf.'
    return ''
  }