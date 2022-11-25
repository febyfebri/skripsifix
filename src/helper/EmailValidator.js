export function EmailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Email Tidak Boleh Kosong."
    if (!re.test(email)) return 'Masukan Email yang Benar'
    return ''
  }