document.addEventListener('adobe_dc_view_sdk.ready', function () {
  const pdfAPIKey = process.env.pdfAPIKey
  const adobeDCView = new AdobeDC.View({
    clientId: pdfAPIKey,
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
