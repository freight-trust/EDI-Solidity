var jdoc = JObject.Parse("{ 'baz' : { 'foo' : { 'value' : '10', 'text' : 'Hello World' } }}");
            
// Convert Json to XML
var doc = (XmlDocument)JsonConvert.DeserializeXmlNode(jdoc.ToString());

// Create XML document containing Xslt Transform
var transform = new XmlDocument();
transform.LoadXml(@"<?xml version='1.0' encoding='utf-8'?>
                    <xsl:stylesheet version='1.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform' >
                        <xsl:output method='xml' indent='yes' omit-xml-declaration='yes' />

                        <xsl:template match='/ | @* | node()'>
                            <xsl:copy>
                                <xsl:apply-templates select='* | @* | node()' />
                            </xsl:copy>
                        </xsl:template>

                        <xsl:template match='foo'>
                            <xsl:element name='bar'>
                                <xsl:apply-templates select='* | @* | node()' />
                            </xsl:element>
                        </xsl:template>
                        <xsl:template match='baz'>  
                            <xsl:element name='splitz'>
                                <xsl:copy>
                                    <xsl:apply-templates select='* | @* | node()' />
                                </xsl:copy>
                        </xsl:element></xsl:template>
                    </xsl:stylesheet>");

//Create compiled transform object that will actually do the transform.
var xslt = new XslCompiledTransform();
xslt.Load(transform.CreateNavigator());

// Transform our Xml-ified JSON
var outputDocument = new XmlDocument();
var stream = new MemoryStream();
xslt.Transform(doc, null, stream);
stream.Position = 0;
outputDocument.Load(stream);

// Convert back to JSON :-)
string jsonText = JsonConvert.SerializeXmlNode(outputDocument);
