//============================================================//
//-----------     For production use PRODUCTION --------------//
//-----------     For Staging use STAGING       --------------//
//-----------     For Development use DEV       --------------//
//============================================================//

import ENV from './environment';
var BASE_URL = '';

if (ENV === 'PRODUCTION') {
  var BASE_URL = "https://altura-api.com/api/v1"
} else if (ENV === 'STAGING') {
  BASE_URL = "https://staging-altura-api.com/api/v1"
} else if (ENV === 'DEV') {
  BASE_URL = "http://10.0.0.5:4047/api/v1"
}

module.exports = BASE_URL;

