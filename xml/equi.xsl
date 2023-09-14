<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0"
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

<xsl:template match = "/">
<html> 
<body>
<h2>Equipment List</h2>
<table border = "1">
<tr bgcolor = "red">
<th>number</th>
<th>Name</th>
<th>purpose</th>
</tr>
<xsl:for-each select="equi/number">
<tr>
<td>
<xsl:value-of select = "@no"/>
</td>
<td><xsl:value-of select = "name"/></td>
<td><xsl:value-of select = "purpose"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
