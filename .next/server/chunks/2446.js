exports.id = 2446;
exports.ids = [2446];
exports.modules = {

/***/ 594:
/***/ ((module) => {

// Exports
module.exports = {
	"map": "Map_map__cd6kI",
	"noMarginTop": "Map_noMarginTop__wK60F",
	"info": "Map_info__nPTXt",
	"left": "Map_left__rq1EF",
	"showInfo": "Map_showInfo__iTacO",
	"hideInfo": "Map_hideInfo__OwrPE",
	"title": "Map_title__hupAr",
	"block": "Map_block__4Tdid",
	"day": "Map_day__uCfoo",
	"time": "Map_time__FJwXV",
	"contact": "Map_contact__KeUUq"
};


/***/ }),

/***/ 2446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(594);
/* harmony import */ var _Map_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Map_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_UI_Icons_phone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9370);
/* harmony import */ var components_UI_Icons_mail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7672);
/* harmony import */ var components_UI_Icons_location_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9250);





const Map = ({ hideMarginTop  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "map",
        className: `${_Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.map} ${hideMarginTop && _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.noMarginTop}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "fb-root"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "fb-customer-chat",
                className: "fb-customerchat"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.info,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.left,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.title,
                                children: "KONTAKT"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.contact,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_UI_Icons_mail_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "mailto:vrgorac@poliklinikapetrovic.com",
                                        children: "vrgorac@poliklinikapetrovic.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.contact,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_UI_Icons_phone_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "tel:+38521674135",
                                        children: "021 674 135"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.contact,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_UI_Icons_location_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "http://maps.google.com/?q=12 Ulica Tina Ujevića 15, Vrgorac, Croatia, 10000",
                                        children: "Ulica Tina Ujevića 15, Vrgorac"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.right,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.title,
                                children: "RADNO VRIJEME"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.block,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.day,
                                        children: "Pon - Pet"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.time,
                                        children: "6:30 - 21h"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.block,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.day,
                                        children: "Sub"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.time,
                                        children: "6.30 - 21h"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.block,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.day,
                                        children: "Ned"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_4__.time,
                                        children: "Ne radimo"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ })

};
;