export async function base64 (file) {
  if (file) {
    

    return new Promise(resolve => {
      reader.onload = ev => {
        resolve(ev.target.result)
      }

      reader.readAsDataURL(image[0])
    })
  }
}