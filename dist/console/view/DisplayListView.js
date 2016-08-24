"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseConsoleView_1 = require("./BaseConsoleView");
var index_1 = require("fgraphics/dist/index");
var index_2 = require("fcore/dist/index");
var DisplayListView = (function (_super) {
    __extends(DisplayListView, _super);
    function DisplayListView() {
        _super.call(this);
    }
    DisplayListView.prototype.construction = function () {
        _super.prototype.construction.call(this);
        this.captureVisible = true;
        this.lastCheckedPos = new index_2.Point();
        this.titleLabel.text = "Display List";
        this.displayListField = index_1.EngineAdapter.instance.createTextWrapper();
        this.contentCont.addChild(this.displayListField);
        this.displayListField.y = this.titleCont.y + this.titleCont.height + 5;
        this.displayListField.color = 0xCCCCCC;
        this.displayListField.size = 14;
    };
    DisplayListView.prototype.addListeners = function () {
        _super.prototype.addListeners.call(this);
        this.eventListenerHelper.addEventListener(index_1.EngineAdapter.instance.mainTicker, index_1.TickerEvent.TICK, this.onTick);
    };
    DisplayListView.prototype.onTick = function () {
        if (this.visible) {
            if (this.lastCheckedPos.x != index_1.EngineAdapter.instance.globalMouseX ||
                this.lastCheckedPos.y != index_1.EngineAdapter.instance.globalMouseY) {
                this.lastCheckedPos.x = index_1.EngineAdapter.instance.globalMouseX;
                this.lastCheckedPos.y = index_1.EngineAdapter.instance.globalMouseY;
                var underPointData = index_1.EngineAdapter.instance.getNativeObjectsUnderPoint(index_1.EngineAdapter.instance.stage.object, index_1.EngineAdapter.instance.globalMouseX, index_1.EngineAdapter.instance.globalMouseY);
                var listText = this.parseUnderPointData(underPointData);
                this.displayListField.text = listText;
                this.arrange();
            }
        }
    };
    DisplayListView.prototype.onCaptureKey = function () {
        _super.prototype.onCaptureKey.call(this);
        var underPointData = index_1.EngineAdapter.instance.getNativeObjectsUnderPoint(index_1.EngineAdapter.instance.stage.object, index_1.EngineAdapter.instance.globalMouseX, index_1.EngineAdapter.instance.globalMouseY);
        // Log the parsed structure
        console.group("Display list structure:");
        this.groupLogUnderPointData(underPointData);
    };
    DisplayListView.prototype.getObjectsUnderMouse = function () {
        return index_1.EngineAdapter.instance.getNativeObjectsUnderPoint(index_1.EngineAdapter.instance.stage.object, index_1.EngineAdapter.instance.globalMouseX, index_1.EngineAdapter.instance.globalMouseY);
    };
    DisplayListView.prototype.parseUnderPointData = function (data, prefix) {
        if (prefix === void 0) { prefix = "∟"; }
        var result = "";
        if (data.object) {
            var tempName = data.object.toString();
            if (data.object.constructor) {
                tempName = data.object.constructor.name;
            }
            result += prefix + " " + tempName;
            var childPrefix = "- " + prefix;
            var childrenCount = data.children.length;
            for (var childIndex = 0; childIndex < childrenCount; childIndex++) {
                result += "\n" + this.parseUnderPointData(data.children[childIndex], childPrefix);
            }
        }
        return result;
    };
    DisplayListView.prototype.groupLogUnderPointData = function (data, prefix) {
        if (prefix === void 0) { prefix = "∟"; }
        if (data.object) {
            //console.log(data.object);
            //console.dir(data.object);
            console.log(prefix, data.object);
            if (data.children && data.children.length > 0) {
                // console.group(" children");
                var childrenCount = data.children.length;
                for (var childIndex = 0; childIndex < childrenCount; childIndex++) {
                    this.groupLogUnderPointData(data.children[childIndex], "    " + prefix);
                }
            }
        }
    };
    return DisplayListView;
}(BaseConsoleView_1.BaseConsoleView));
exports.DisplayListView = DisplayListView;
//# sourceMappingURL=DisplayListView.js.map