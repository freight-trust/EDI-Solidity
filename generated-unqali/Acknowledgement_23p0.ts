/***********
generated template classes for ./Acknowledgement_23p0.xsd 11/11/2020, 12:32:19 PM
***********/





import * as ram from "";

export class Acknowledgement_23p0 {
    public acknowledgementType: AcknowledgementType;

    public constructor(props?: Acknowledgement_23p0) {
        this["@class"] = ".Acknowledgement_23p0";

        (<any>Object).assign(this, <any> props);
    }
}

export class AcknowledgementType {
    public PSCPMAcknowledgementDocument?: ram.PSCPMAcknowledgementDocumentType;
    public ProjectParty: ram.ProjectPartyType;

    public constructor(props?: AcknowledgementType) {
        this["@class"] = ".AcknowledgementType";

        (<any>Object).assign(this, <any> props);
    }
}
