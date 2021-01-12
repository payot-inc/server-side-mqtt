"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mqtt = _interopRequireDefault(require("mqtt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ServerSideMqtt = /*#__PURE__*/function () {
  function ServerSideMqtt(host, port) {
    _classCallCheck(this, ServerSideMqtt);

    this.host = this.host;
    this.port = this.port;
    this.client = _mqtt["default"].connect("mqtt://".concat(host, ":").concat(port));
  }

  _createClass(ServerSideMqtt, [{
    key: "test",
    value: function test() {
      console.log(this.host, this.port);
    }
  }]);

  return ServerSideMqtt;
}();

exports["default"] = ServerSideMqtt;
new ServerSideMqtt('test', 123).test();