/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst React = __webpack_require__(/*! react */ \"react\");\nconst ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst AppServer = (__webpack_require__(/*! ../src/AppServer */ \"./src/AppServer.js\")[\"default\"]);\nconst AppServerBrokerStmts = (__webpack_require__(/*! ../src/AppServerBrokerStmts */ \"./src/AppServerBrokerStmts.js\")[\"default\"]);\nconst app = express();\nconst PORT = process.env.PORT || 3001;\napp.use(function (req, res, next) {\n  res.header(\"Access-Control-Allow-Origin\", \"*\"); // update to match the domain you will make the request from\n  res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n  next();\n});\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: true\n}));\napp.get('/', (req, res) => {\n  const html = \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\" />\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n        <title>App Server</title>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">You've reached the Web Server that inserts information extracted by Capture Service into Vertica Analytics database</div>\\n      </body>\\n    </html>\";\n  res.send(html);\n});\napp.post('/', (req, res) => {\n  const data = req.body;\n  var content;\n  if (data.includes(data.find(_ref => {\n    let {\n      name\n    } = _ref;\n    return name === \"BrokerNumber\";\n  }))) {\n    content = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(AppServerBrokerStmts, {\n      data: data\n    }));\n  } else if (data.includes(data.find(_ref2 => {\n    let {\n      name\n    } = _ref2;\n    return name === \"LabName\";\n  }))) {\n    content = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(AppServer, {\n      data: data\n    }));\n  } else {\n    content = 'Database not setup to store data for this document type';\n  }\n  res.send(content);\n  res.end();\n});\napp.listen(PORT, () => {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://riskguard+capture+vertica_demo/./server/index.js?");

/***/ }),

/***/ "./src/AppServer.js":
/*!**************************!*\
  !*** ./src/AppServer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppServer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties */ \"./src/properties.js\");\n\n\nfunction AppServer(props) {\n  const data = props.data;\n  const patientName = data.find(_ref => {\n    let {\n      name\n    } = _ref;\n    return name === \"PatientName\";\n  }).data[0].value;\n  const patientDOB = data.find(_ref2 => {\n    let {\n      name\n    } = _ref2;\n    return name === \"PatientDOB\";\n  }).data[0].value;\n  const physicianName = data.find(_ref3 => {\n    let {\n      name\n    } = _ref3;\n    return name === \"PhysicianName\";\n  }).data[0].value;\n  const accessionNumber = data.find(_ref4 => {\n    let {\n      name\n    } = _ref4;\n    return name === \"AccessionNumber\";\n  }).data[0].value;\n  const dateCollected = data.find(_ref5 => {\n    let {\n      name\n    } = _ref5;\n    return name === \"DateCollected\";\n  }).data[0].value;\n  const dateReceived = data.find(_ref6 => {\n    let {\n      name\n    } = _ref6;\n    return name === \"DateReceived\";\n  }).data[0].value;\n  const dateCompleted = data.find(_ref7 => {\n    let {\n      name\n    } = _ref7;\n    return name === \"DateCompleted\";\n  }).data[0].value;\n  const labName = data.find(_ref8 => {\n    let {\n      name\n    } = _ref8;\n    return name === \"LabName\";\n  }).data[0].value;\n  const labAddress = data.find(_ref9 => {\n    let {\n      name\n    } = _ref9;\n    return name === \"LabAddress\";\n  }).data[0].value;\n  const labPhone = data.find(_ref10 => {\n    let {\n      name\n    } = _ref10;\n    return name === \"LabPhone\";\n  }).data[0].value;\n  const pathogensNames = data.find(_ref11 => {\n    let {\n      name\n    } = _ref11;\n    return name === \"Pathogens_Name\";\n  }).data;\n  const pathogensResults = data.find(_ref12 => {\n    let {\n      name\n    } = _ref12;\n    return name === \"Pathogens_Result\";\n  }).data;\n  const pathogensExpected = data.find(_ref13 => {\n    let {\n      name\n    } = _ref13;\n    return name === \"Pathogens_Expected\";\n  }).data;\n  const pathogensIndicator = data.find(_ref14 => {\n    let {\n      name\n    } = _ref14;\n    return name === \"Pathogens_Indicator\";\n  }).data;\n  const pathogenTypes = ['Bacterial Pathogens', 'Parasitic Pathogens', 'Viral Pathogens', 'H. pylori'];\n  const insertLabReportQuery = \"insert into lab_reports (patient_name, patient_dob, physician_name, accession_number, date_collected, date_received, date_completed, lab_name, lab_address, lab_phone) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\";\n  const insertPathogensQuery = \"insert into lab_report_pathogens (report_id, pathogen_type, pathogen_name, pathogen_result, pathogen_expected, pathogen_indicator) values (?, ?, ?, ?, ?, ?)\";\n  const {\n    Client\n  } = __webpack_require__(/*! vertica-nodejs */ \"vertica-nodejs\");\n  const client = new Client({\n    host: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_host,\n    port: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_port,\n    user: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_user,\n    password: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_password,\n    database: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_database\n  });\n  client.connect();\n  client.query(insertLabReportQuery, [patientName, patientDOB, physicianName, accessionNumber, dateCollected, dateReceived, dateCompleted, labName, labAddress, labPhone], (err, res) => {\n    if (err) {\n      console.log('error: ', err);\n      throw err;\n    }\n    client.query(\"select last_insert_id()\", (err, res) => {\n      if (err) console.log('error: ', err);\n      let reportId = res.rows[0].last_insert_id;\n      console.log('New lab report added with report Id: ', reportId);\n      let pathogenType = '';\n      for (let i = 0; i < pathogensNames.length; i++) {\n        if (pathogenTypes.includes(pathogensNames.at(i).value)) {\n          pathogenType = pathogensNames.at(i).value;\n          continue;\n        }\n        client.query(insertPathogensQuery, [reportId, pathogenType, pathogensNames.at(i).value, pathogensResults.at(i).value, pathogensExpected.at(i).value, pathogensIndicator.at(i).value], (err, res) => {\n          if (err) {\n            console.log('error: ', err);\n            throw err;\n          }\n        });\n      }\n      client.query(\"commit\", (err, res) => {\n        if (err) console.log('error: ', err);\n        client.end();\n      });\n    });\n  });\n  return \"Successfully added Lab Report data into Vertica Analytics database\";\n}\n\n//# sourceURL=webpack://riskguard+capture+vertica_demo/./src/AppServer.js?");

/***/ }),

/***/ "./src/AppServerBrokerStmts.js":
/*!*************************************!*\
  !*** ./src/AppServerBrokerStmts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppServerBrokerStmts)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties */ \"./src/properties.js\");\n\n\nfunction AppServerBrokerStmts(props) {\n  const data = props.data;\n  const stmtFor = data.find(_ref => {\n    let {\n      name\n    } = _ref;\n    return name === \"For\";\n  }).data[0].value;\n  const stmtFrom = data.find(_ref2 => {\n    let {\n      name\n    } = _ref2;\n    return name === \"From\";\n  }).data[0].value;\n  const brokerNumber = data.find(_ref3 => {\n    let {\n      name\n    } = _ref3;\n    return name === \"BrokerNumber\";\n  }).data[0].value;\n  const stmtDate = data.find(_ref4 => {\n    let {\n      name\n    } = _ref4;\n    return name === \"Date\";\n  }).data[0].value;\n  const accountMonth = data.find(_ref5 => {\n    let {\n      name\n    } = _ref5;\n    return name === \"AccountMonth\";\n  }).data[0].value;\n  const companyCode = data.find(_ref6 => {\n    let {\n      name\n    } = _ref6;\n    return name === \"CompanyCode\";\n  }).data[0].value;\n  const totalGross = data.find(_ref7 => {\n    let {\n      name\n    } = _ref7;\n    return name === \"TotalGross\";\n  }).data[0].value;\n  const totalNet = data.find(_ref8 => {\n    let {\n      name\n    } = _ref8;\n    return name === \"TotalNet\";\n  }).data[0].value;\n  const paymentNumber = data.find(_ref9 => {\n    let {\n      name\n    } = _ref9;\n    return name === \"PaymentNumber\";\n  }).data[0].value;\n  const premiumsInsuredName = data.find(_ref10 => {\n    let {\n      name\n    } = _ref10;\n    return name === \"Premiums_Insured\";\n  }).data;\n  const premiumsPolicyNumber = data.find(_ref11 => {\n    let {\n      name\n    } = _ref11;\n    return name === \"Premiums_PolicyNumber\";\n  }).data;\n  const premiumsClientCode = data.find(_ref12 => {\n    let {\n      name\n    } = _ref12;\n    return name === \"Premiums_ClientCode\";\n  }).data;\n  const premiumsEffectiveDate = data.find(_ref13 => {\n    let {\n      name\n    } = _ref13;\n    return name === \"Premiums_EffectiveDate\";\n  }).data;\n  const premiumsGrossPremium = data.find(_ref14 => {\n    let {\n      name\n    } = _ref14;\n    return name === \"Premiums_GrossPremium\";\n  }).data;\n  const premiumsCommissionRate = data.find(_ref15 => {\n    let {\n      name\n    } = _ref15;\n    return name === \"Premiums_CommissionRate\";\n  }).data;\n  const premiumsNetPremium = data.find(_ref16 => {\n    let {\n      name\n    } = _ref16;\n    return name === \"Premiums_NetPremium\";\n  }).data;\n  const insertBrokerStmtQuery = \"insert into broker_stmt (stmt_for, stmt_from, broker_number, stmt_date, account_month, company_code, total_gross, total_net, payment_number) values (?, ?, ?, ?, ?, ?, ?, ?, ?)\";\n  const insertPremiumsQuery = \"insert into broker_stmt_premiums (stmt_id, premiums_insured_name, premiums_policy_number, premiums_client_code, premiums_effective_date, premiums_gross_premium, premiums_commission_rate, premiums_net_premium) values (?, ?, ?, ?, ?, ?, ?, ?)\";\n  const {\n    Client\n  } = __webpack_require__(/*! vertica-nodejs */ \"vertica-nodejs\");\n  const client = new Client({\n    host: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_host,\n    port: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_port,\n    user: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_user,\n    password: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_password,\n    database: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_database\n  });\n  client.connect();\n  client.query(insertBrokerStmtQuery, [stmtFor, stmtFrom, brokerNumber, stmtDate, accountMonth, companyCode, totalGross, totalNet, paymentNumber], (err, res) => {\n    if (err) {\n      console.log('error: ', err);\n      throw err;\n    }\n    client.query(\"select last_insert_id()\", (err, res) => {\n      if (err) console.log('error: ', err);\n      let stmtId = res.rows[0].last_insert_id;\n      console.log('New broker stmt added with stmt Id: ', stmtId);\n      for (let i = 0; i < premiumsInsuredName.length; i++) {\n        client.query(insertPremiumsQuery, [stmtId, premiumsInsuredName.at(i).value, premiumsPolicyNumber.at(i).value, premiumsClientCode.at(i).value, premiumsEffectiveDate.at(i).value, premiumsGrossPremium.at(i).value, premiumsCommissionRate.at(i).value, premiumsNetPremium.at(i).value], (err, res) => {\n          if (err) {\n            console.log('error: ', err);\n            throw err;\n          }\n        });\n      }\n      client.query(\"commit\", (err, res) => {\n        if (err) console.log('error: ', err);\n        client.end();\n      });\n    });\n  });\n  return \"Successfully added Insurance Broker Statement data into Vertica Analytics database\";\n}\n\n//# sourceURL=webpack://riskguard+capture+vertica_demo/./src/AppServerBrokerStmts.js?");

/***/ }),

/***/ "./src/properties.js":
/*!***************************!*\
  !*** ./src/properties.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   properties: () => (/* binding */ properties)\n/* harmony export */ });\nconst properties = {\n  base_url: 'https://us.api.opentext.com',\n  server_url: 'http://localhost:3001/',\n  tenant_id: 'af4d9b4a-35bc-4426-abf7-8732028886e8',\n  username: 'otw24devnltx+lab1student1@outlook.com',\n  //different for every user\n  password: 'OCPLab123456!',\n  client_id: 'Zc43NvYepWr7JmBEZ8AxEr55lGfoC387',\n  client_secret: 'P2a3t53QZsZBdM3g',\n  db_host: '127.0.0.1',\n  db_port: '5433',\n  db_user: 'dbadmin',\n  db_password: 'password',\n  db_database: 'imservices_db'\n};\n\n//# sourceURL=webpack://riskguard+capture+vertica_demo/./src/properties.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "vertica-nodejs":
/*!*********************************!*\
  !*** external "vertica-nodejs" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("vertica-nodejs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;