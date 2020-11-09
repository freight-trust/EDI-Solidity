"use strict";
/***********
generated template classes for ./EDISchema-v4.xsd 11/9/2020, 6:30:59 AM
***********/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EDISchema_v4 = /** @class */ (function () {
    function EDISchema_v4(props) {
        this["@class"] = ".EDISchema_v4";
        Object.assign(this, props);
    }
    return EDISchema_v4;
}());
exports.EDISchema_v4 = EDISchema_v4;
var referenceAttributeGroup = /** @class */ (function () {
    function referenceAttributeGroup(props) {
        this["@class"] = ".referenceAttributeGroup";
        Object.assign(this, props);
    }
    return referenceAttributeGroup;
}());
exports.referenceAttributeGroup = referenceAttributeGroup;
var lengthAttributeGroup = /** @class */ (function () {
    function lengthAttributeGroup(props) {
        this["@class"] = ".lengthAttributeGroup";
        Object.assign(this, props);
    }
    return lengthAttributeGroup;
}());
exports.lengthAttributeGroup = lengthAttributeGroup;
var occursAttributeGroup = /** @class */ (function () {
    function occursAttributeGroup(props) {
        this["@class"] = ".occursAttributeGroup";
        Object.assign(this, props);
    }
    return occursAttributeGroup;
}());
exports.occursAttributeGroup = occursAttributeGroup;
var versionAttributeGroup = /** @class */ (function () {
    function versionAttributeGroup(props) {
        this["@class"] = ".versionAttributeGroup";
        Object.assign(this, props);
    }
    return versionAttributeGroup;
}());
exports.versionAttributeGroup = versionAttributeGroup;
var implementationAttributeGroup = /** @class */ (function () {
    function implementationAttributeGroup(props) {
        this["@class"] = ".implementationAttributeGroup";
        Object.assign(this, props);
    }
    return implementationAttributeGroup;
}());
exports.implementationAttributeGroup = implementationAttributeGroup;
var BaseType = /** @class */ (function () {
    function BaseType(props) {
        this["@class"] = ".BaseType";
        Object.assign(this, props);
    }
    return BaseType;
}());
exports.BaseType = BaseType;
var AnyElementType = /** @class */ (function () {
    function AnyElementType(props) {
        this["@class"] = ".AnyElementType";
        Object.assign(this, props);
    }
    return AnyElementType;
}());
exports.AnyElementType = AnyElementType;
var ControlType = /** @class */ (function () {
    function ControlType(props) {
        this["@class"] = ".ControlType";
        Object.assign(this, props);
    }
    return ControlType;
}());
exports.ControlType = ControlType;
var TransactionControlType = /** @class */ (function () {
    function TransactionControlType(props) {
        this["@class"] = ".TransactionControlType";
        Object.assign(this, props);
    }
    return TransactionControlType;
}());
exports.TransactionControlType = TransactionControlType;
var SegmentStandard = /** @class */ (function () {
    function SegmentStandard(props) {
        this["@class"] = ".SegmentStandard";
        Object.assign(this, props);
    }
    return SegmentStandard;
}());
exports.SegmentStandard = SegmentStandard;
var Sequence = /** @class */ (function () {
    function Sequence(props) {
        this["@class"] = ".Sequence";
        Object.assign(this, props);
    }
    return Sequence;
}());
exports.Sequence = Sequence;
var LoopBase = /** @class */ (function () {
    function LoopBase(props) {
        this["@class"] = ".LoopBase";
        Object.assign(this, props);
    }
    return LoopBase;
}());
exports.LoopBase = LoopBase;
var Schema = /** @class */ (function () {
    function Schema(props) {
        this["@class"] = ".Schema";
        Object.assign(this, props);
    }
    return Schema;
}());
exports.Schema = Schema;
var Include = /** @class */ (function () {
    function Include(props) {
        this["@class"] = ".Include";
        Object.assign(this, props);
    }
    return Include;
}());
exports.Include = Include;
var Interchange = /** @class */ (function () {
    function Interchange(props) {
        this["@class"] = ".Interchange";
        Object.assign(this, props);
    }
    return Interchange;
}());
exports.Interchange = Interchange;
var Transaction = /** @class */ (function () {
    function Transaction(props) {
        this["@class"] = ".Transaction";
        Object.assign(this, props);
    }
    return Transaction;
}());
exports.Transaction = Transaction;
var Implementation = /** @class */ (function () {
    function Implementation(props) {
        this["@class"] = ".Implementation";
        Object.assign(this, props);
    }
    return Implementation;
}());
exports.Implementation = Implementation;
var ElementType = /** @class */ (function () {
    function ElementType(props) {
        this["@class"] = ".ElementType";
        Object.assign(this, props);
    }
    return ElementType;
}());
exports.ElementType = ElementType;
var Enumeration = /** @class */ (function () {
    function Enumeration(props) {
        this["@class"] = ".Enumeration";
        Object.assign(this, props);
    }
    return Enumeration;
}());
exports.Enumeration = Enumeration;
var CompositeType = /** @class */ (function () {
    function CompositeType(props) {
        this["@class"] = ".CompositeType";
        Object.assign(this, props);
    }
    return CompositeType;
}());
exports.CompositeType = CompositeType;
var SegmentType = /** @class */ (function () {
    function SegmentType(props) {
        this["@class"] = ".SegmentType";
        Object.assign(this, props);
    }
    return SegmentType;
}());
exports.SegmentType = SegmentType;
var Syntax = /** @class */ (function () {
    function Syntax(props) {
        this["@class"] = ".Syntax";
        Object.assign(this, props);
    }
    return Syntax;
}());
exports.Syntax = Syntax;
var GroupControlType = /** @class */ (function (_super) {
    __extends(GroupControlType, _super);
    function GroupControlType(props) {
        var _this = _super.call(this) || this;
        _this["@class"] = ".GroupControlType";
        Object.assign(_this, props);
        return _this;
    }
    return GroupControlType;
}(Tns));
exports.GroupControlType = GroupControlType;
var ElementStandard = /** @class */ (function (_super) {
    __extends(ElementStandard, _super);
    function ElementStandard(props) {
        var _this = _super.call(this) || this;
        _this["@class"] = ".ElementStandard";
        Object.assign(_this, props);
        return _this;
    }
    return ElementStandard;
}(Tns));
exports.ElementStandard = ElementStandard;
var ElementImpl = /** @class */ (function (_super) {
    __extends(ElementImpl, _super);
    function ElementImpl(props) {
        var _this = _super.call(this) || this;
        _this["@class"] = ".ElementImpl";
        Object.assign(_this, props);
        return _this;
    }
    return ElementImpl;
}(Tns));
exports.ElementImpl = ElementImpl;
var CompositeStandard = /** @class */ (function (_super) {
    __extends(CompositeStandard, _super);
    function CompositeStandard(props) {
        var _this = _super.call(this) || this;
        _this["@class"] = ".CompositeStandard";
        Object.assign(_this, props);
        return _this;
    }
    return CompositeStandard;
}(Tns));
exports.CompositeStandard = CompositeStandard;
var CompositeImpl = /** @class */ (function (_super) {
    __extends(CompositeImpl, _super);
    function CompositeImpl(props) {
        var _this = _super.call(this) || this;
        _this["@class"] = ".CompositeImpl";
        Object.assign(_this, props);
        return _this;
    }
    return CompositeImpl;
}(Tns));
exports.CompositeImpl = CompositeImpl;
var SegmentImpl = /** @class */ (function (_super) {
    __extends(SegmentImpl, _super);
    function SegmentImpl(props) {
        var _this = _super.call(this) || this;
        _this["@class"] = ".SegmentImpl";
        Object.assign(_this, props);
        return _this;
    }
    return SegmentImpl;
}(Tns));
exports.SegmentImpl = SegmentImpl;
var LoopStandard = /** @class */ (function (_super) {
    __extends(LoopStandard, _super);
    function LoopStandard(props) {
        var _this = _super.call(this) || this;
        _this["@class"] = ".LoopStandard";
        Object.assign(_this, props);
        return _this;
    }
    return LoopStandard;
}(Tns));
exports.LoopStandard = LoopStandard;
var LoopImpl = /** @class */ (function (_super) {
    __extends(LoopImpl, _super);
    function LoopImpl(props) {
        var _this = _super.call(this) || this;
        _this["@class"] = ".LoopImpl";
        Object.assign(_this, props);
        return _this;
    }
    return LoopImpl;
}(Tns));
exports.LoopImpl = LoopImpl;
var useType;
(function (useType) {
    useType["required"] = "required";
    useType["optional"] = "optional";
    useType["prohibited"] = "prohibited";
})(useType || (useType = {}));
var syntaxType;
(function (syntaxType) {
    syntaxType["single"] = "single";
    syntaxType["paired"] = "paired";
    syntaxType["required"] = "required";
    syntaxType["exclusion"] = "exclusion";
    syntaxType["conditional"] = "conditional";
    syntaxType["list"] = "list";
    syntaxType["firstonly"] = "firstonly";
})(syntaxType || (syntaxType = {}));
var elementBaseType;
(function (elementBaseType) {
    elementBaseType["binary"] = "binary";
    elementBaseType["date"] = "date";
    elementBaseType["decimal"] = "decimal";
    elementBaseType["identifier"] = "identifier";
    elementBaseType["numeric"] = "numeric";
    elementBaseType["string"] = "string";
    elementBaseType["time"] = "time";
})(elementBaseType || (elementBaseType = {}));
//# sourceMappingURL=index.js.map