import { PDFDocument, rgb } from 'pdf-lib'
import pdf from '../assets/CAPurchaseAgreement.pdf'
import json from '../assets/CAPurchaseAgreement.json'

export const compileOffer = async (inputs) => {
  const existingPdfBytes = await fetch(pdf).then((res) => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]

  // Temporary fallback
  const buyerName = inputs.buyer || 'Modern Realtor'

  // TODO: Map over fields and map to 'inputs' and draw them on PDF
  // Just doing name for now as to show functionality and for times' sake
  firstPage.drawText(buyerName, {
    x: 175,
    y: 674,
    size: 8,
    color: rgb(0, 0, 0)
  })

  const pdfBytes = await pdfDoc.save()

  const blob = new Blob([pdfBytes], { type: 'application/pdf' })
  const urlBlob = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = urlBlob
  a.download = `${buyerName}_PurchaseAgreement.pdf`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
