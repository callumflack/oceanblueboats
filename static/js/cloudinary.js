// https://codepen.io/geelen/pen/RGvQyJ
// Use the attibute data-bg-square to ensure an images dimensions will be 1:1

(() => {
  function calcImageDimension(length, pixelRatio) {
    return 100 * Math.round(length * pixelRatio / 100)
  }

  function handleImageLoad(event) {
    const image = event.target;

    const { clientWidth, clientHeight } = image
    const pixelRatio = window.devicePixelRatio || 1.0
    const isSquare = image.hasAttribute('data-bg-square')

    const imageWidth = calcImageDimension(clientWidth, pixelRatio)
    const imageHeight = isSquare ? imageWidth : calcImageDimension(clientHeight, pixelRatio)

    const gPosition = image.hasAttribute('data-bg-face') ? 'g_face' : 'g_center'
    const imageParams = `w_${imageWidth},h_${imageHeight},c_fill,${gPosition},f_auto`

    const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`

    image.src = url
  }


  const baseUrl = 'https://res.cloudinary.com/pw-img-cdn/image/fetch'
  const blurUrl = `${baseUrl}/w_100,e_blur:300`

  Array.from(document.querySelectorAll('[data-bg]')).forEach(image => {
    const url = `${blurUrl}/${image.dataset.bg}`

    image.src = url
    image.addEventListener('load', handleImageLoad);
  })
})()
