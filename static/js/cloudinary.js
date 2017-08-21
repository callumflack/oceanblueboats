// https://codepen.io/geelen/pen/RGvQyJ
// Use the attibute data-bg-square to ensure an images dimensions will be 1:1

(() => {
  const baseUrl = 'https://res.cloudinary.com/pw-img-cdn/image/fetch'
  const calcImageDimension = (length, pixelRatio) => 100 * Math.round(length * pixelRatio / 100)

  Array.from(document.querySelectorAll('[data-bg]')).forEach(image => {
    const { clientWidth, clientHeight } = image
    const pixelRatio = window.devicePixelRatio || 1.0
    const isSquare = image.hasAttribute('data-bg-square')

    const imageWidth = calcImageDimension(clientWidth, pixelRatio)
    const imageHeight = isSquare ? imageWidth : calcImageDimension(clientHeight, pixelRatio)

    const gPosition = image.hasAttribute('data-bg-face') ? 'g_face' : 'g_center'
    const imageParams = `w_${imageWidth},h_${imageHeight},c_fill,${gPosition},f_auto`
    const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`

    image.style.backgroundImage = `url('${url}')`
  })
})()
