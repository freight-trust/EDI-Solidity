/***********
generated template classes for ./EDISchema-v4.xsd 11/9/2020, 6:30:59 AM
***********/





import * as tns from "";

export class EDISchema_v4 {
    public baseType: BaseType;
    public anyElementType: AnyElementType;
    public controlType: ControlType;
    public transactionControlType: TransactionControlType;
    public groupControlType: GroupControlType;
    public elementStandard: ElementStandard;
    public elementImpl: ElementImpl;
    public compositeStandard: CompositeStandard;
    public compositeImpl: CompositeImpl;
    public segmentStandard: SegmentStandard;
    public segmentImpl: SegmentImpl;
    public loopBase: LoopBase;
    public loopStandard: LoopStandard;
    public loopImpl: LoopImpl;
    public schema: Schema;
    public include: Include;
    public interchange: Interchange;
    public transaction: Transaction;
    public implementation: Implementation;
    public elementType: ElementType;
    public enumeration: Enumeration;
    public compositeType: CompositeType;
    public segmentType: SegmentType;
    public syntax: Syntax;
    public useType: useType;
    public syntaxType: syntaxType;
    public elementBaseType: elementBaseType;

    public constructor(props?: EDISchema_v4) {
        this["@class"] = ".EDISchema_v4";

        (<any>Object).assign(this, <any> props);
    }
}

export abstract class referenceAttributeGroup {
    public type: NCName;

    public constructor(props?: referenceAttributeGroup) {
        this["@class"] = ".referenceAttributeGroup";

        (<any>Object).assign(this, <any> props);
    }
}

export abstract class lengthAttributeGroup {
    public minLength: nonNegativeInteger;
    public maxLength: nonNegativeInteger;

    public constructor(props?: lengthAttributeGroup) {
        this["@class"] = ".lengthAttributeGroup";

        (<any>Object).assign(this, <any> props);
    }
}

export abstract class occursAttributeGroup {
    public minOccurs: nonNegativeInteger;
    public maxOccurs: nonNegativeInteger;

    public constructor(props?: occursAttributeGroup) {
        this["@class"] = ".occursAttributeGroup";

        (<any>Object).assign(this, <any> props);
    }
}

export abstract class versionAttributeGroup {
    public minVersion: token;
    public maxVersion: token;

    public constructor(props?: versionAttributeGroup) {
        this["@class"] = ".versionAttributeGroup";

        (<any>Object).assign(this, <any> props);
    }
}

export abstract class implementationAttributeGroup {
    public minOccurs: nonNegativeInteger;
    public maxOccurs: nonNegativeInteger;

    public constructor(props?: implementationAttributeGroup) {
        this["@class"] = ".implementationAttributeGroup";

        (<any>Object).assign(this, <any> props);
    }
}

export class BaseType {
    public description: tns.Description;

    public constructor(props?: BaseType) {
        this["@class"] = ".BaseType";

        (<any>Object).assign(this, <any> props);
    }
}

export class AnyElementType {
    public constructor(props?: AnyElementType) {
        this["@class"] = ".AnyElementType";

        (<any>Object).assign(this, <any> props);
    }
}

export class ControlType {
    public constructor(props?: ControlType) {
        this["@class"] = ".ControlType";

        (<any>Object).assign(this, <any> props);
    }
}

export class TransactionControlType {
    public constructor(props?: TransactionControlType) {
        this["@class"] = ".TransactionControlType";

        (<any>Object).assign(this, <any> props);
    }
}

export class SegmentStandard {
    public constructor(props?: SegmentStandard) {
        this["@class"] = ".SegmentStandard";

        (<any>Object).assign(this, <any> props);
    }
}

export class Sequence {
    public constructor(props?: Sequence) {
        this["@class"] = ".Sequence";

        (<any>Object).assign(this, <any> props);
    }
}

export class LoopBase {
    public constructor(props?: LoopBase) {
        this["@class"] = ".LoopBase";

        (<any>Object).assign(this, <any> props);
    }
}

export class Schema {
    public include?: tns.Include[];

    public constructor(props?: Schema) {
        this["@class"] = ".Schema";

        (<any>Object).assign(this, <any> props);
    }
}

export class Include {
    public schemaLocation: anyURI;

    public constructor(props?: Include) {
        this["@class"] = ".Include";

        (<any>Object).assign(this, <any> props);
    }
}

export class Interchange {
    public constructor(props?: Interchange) {
        this["@class"] = ".Interchange";

        (<any>Object).assign(this, <any> props);
    }
}

export class Transaction {
    public constructor(props?: Transaction) {
        this["@class"] = ".Transaction";

        (<any>Object).assign(this, <any> props);
    }
}

export class Implementation {
    public constructor(props?: Implementation) {
        this["@class"] = ".Implementation";

        (<any>Object).assign(this, <any> props);
    }
}

export class ElementType {
    public constructor(props?: ElementType) {
        this["@class"] = ".ElementType";

        (<any>Object).assign(this, <any> props);
    }
}

export class Enumeration {
    public constructor(props?: Enumeration) {
        this["@class"] = ".Enumeration";

        (<any>Object).assign(this, <any> props);
    }
}

export class CompositeType {
    public constructor(props?: CompositeType) {
        this["@class"] = ".CompositeType";

        (<any>Object).assign(this, <any> props);
    }
}

export class SegmentType {
    public constructor(props?: SegmentType) {
        this["@class"] = ".SegmentType";

        (<any>Object).assign(this, <any> props);
    }
}

export class Syntax {
    public position: tns.positionType[];

    public constructor(props?: Syntax) {
        this["@class"] = ".Syntax";

        (<any>Object).assign(this, <any> props);
    }
}

export class GroupControlType extends Tns:controlType {
    public transaction?: tns.transactionControlType;

    public constructor(props?: GroupControlType) {
        super();

        this["@class"] = ".GroupControlType";

        (<any>Object).assign(this, <any> props);
    }
}

export class ElementStandard extends Tns:baseType {
    public constructor(props?: ElementStandard) {
        super();

        this["@class"] = ".ElementStandard";

        (<any>Object).assign(this, <any> props);
    }
}

export class ElementImpl extends Tns:baseType {
    public enumeration: tns.Enumeration;

    public constructor(props?: ElementImpl) {
        super();

        this["@class"] = ".ElementImpl";

        (<any>Object).assign(this, <any> props);
    }
}

export class CompositeStandard extends Tns:baseType {
    public constructor(props?: CompositeStandard) {
        super();

        this["@class"] = ".CompositeStandard";

        (<any>Object).assign(this, <any> props);
    }
}

export class CompositeImpl extends Tns:baseType {
    public sequence?: tns.elementImpl[];

    public constructor(props?: CompositeImpl) {
        super();

        this["@class"] = ".CompositeImpl";

        (<any>Object).assign(this, <any> props);
    }
}

export class SegmentImpl extends Tns:baseType {
    public sequence?: Sequence;

    public constructor(props?: SegmentImpl) {
        super();

        this["@class"] = ".SegmentImpl";

        (<any>Object).assign(this, <any> props);
    }
}

export class LoopStandard extends Tns:loopBase {
    public syntax?: tns.Syntax[];

    public constructor(props?: LoopStandard) {
        super();

        this["@class"] = ".LoopStandard";

        (<any>Object).assign(this, <any> props);
    }
}

export class LoopImpl extends Tns:loopBase {
    public constructor(props?: LoopImpl) {
        super();

        this["@class"] = ".LoopImpl";

        (<any>Object).assign(this, <any> props);
    }
}

enum useType {
    required = "required",
    optional = "optional",
    prohibited = "prohibited"
}

enum syntaxType {
    single = "single",
    paired = "paired",
    required = "required",
    exclusion = "exclusion",
    conditional = "conditional",
    list = "list",
    firstonly = "firstonly"
}

enum elementBaseType {
    binary = "binary",
    date = "date",
    decimal = "decimal",
    identifier = "identifier",
    numeric = "numeric",
    string = "string",
    time = "time"
}
