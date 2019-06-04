export const parseJwt = (token) => {
  let base64Url = token.split('.')[1]
  let base64 = decodeURIComponent(atob(base64Url).split('').map((c) => (
    '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  )).join(''))

  return JSON.parse(base64)
}
