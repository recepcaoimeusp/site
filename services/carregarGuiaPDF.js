document.addEventListener('adobe_dc_view_sdk.ready', function () {
  const adobeDCView = new AdobeDC.View({
    clientId: 'dcca4fd169784e0baf10bb1a4ddc3b7e',
    divId: 'pdf-view',
  })
  adobeDCView.previewFile(
    {
      content: {
        location: {
          url:
            'https://drive.google.com/file/d/1Hdj8wfGvu9MOmyYdKxLDL71d3EDPZ0MW/view?usp=sharing',
        },
      },
      metaData: { fileName: 'Bodea Brochure.pdf' },
    },
    { embedMode: 'SIZED_CONTAINER' }
  )
})
