// customer ID は https://support.google.com/a/answer/10070793 の指示にしたがって手動で調査
const customer_id = 'xxxxxxxx';

// Google Workspace for Education Legacy SKUs
// https://developers.google.com/admin-sdk/licensing/v1/how-tos/products
const product_id = '101031';

function unassignLicensesForExpiredUsers() {
  let pageToken;
  do {
    let page = AdminLicenseManager.LicenseAssignments.listForProduct(product_id, customer_id, {
      maxResults: 100,
      pageToken: pageToken
    });
    let items = page.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        let user = AdminDirectory.Users.get(items[i].userId);
        if (user.orgUnitPath == '/expired') {
          AdminLicenseManager.LicenseAssignments.remove(product_id, items[i].skuId, items[i].userId);
          Logger.log('License unassigned: userId=%s, orgUnitPath=%s', user.primaryEmail, user.orgUnitPath);
        }
      }
    } else {
      Logger.log('No items found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
  return;
}
