/**
 * Google Apps Script: save Grand Palladium inquiry form submissions to a Google Sheet
 * Deploy as Web App: Execute as Me, Who has access: Anyone
 *
 * SETUP:
 * 1. Create a Google Sheet and add a sheet named exactly: Palladium CM
 * 2. In Row 1, add these headers (one per column, in this order):
 *    Date | fullName | email | phone | preferredDate | guestCount | eventsCount | totalBudget | country | vision | pageUrl
 * 3. Run intialSetup() once from the Script Editor (with the spreadsheet open) to store the sheet ID
 * 4. Deploy as Web app, copy the web app URL into GrandPalladiumInquiryForm.jsx (SCRIPT_URL)
 */

const sheetName = 'Palladium CM'
const scriptProp = PropertiesService.getScriptProperties()

function intialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Use POST to submit Grand Palladium inquiry form data.' }))
    .setMimeType(ContentService.MimeType.JSON)
}

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1

    const newRow = headers.map(function (header) {
      return header === 'Date' ? new Date() : (e.parameter[header] != null ? e.parameter[header] : '')
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', row: nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
  }
}
