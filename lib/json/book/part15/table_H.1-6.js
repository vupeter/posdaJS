datab = [{},{"Information Field":"Common Name","Multiplicity":"0..1","Description":"An arbitrary name for the Network Connections object. Can be a meaningful name or any unique sequence of characters. Can be used as the RDN.  The \"cn\" attribute type is a basic LDAP defined type and is a synonym for Common Name."},{"Information Field":"Hostname","Multiplicity":"1","Description":"This is the DNS name for this particular connection. This is used to obtain the current IP address for connections. Hostname must be sufficiently qualified to be unambiguous for any client DNS user."},{"Information Field":"Port","Multiplicity":"0..1","Description":"The TCP port that the AE is listening on. (This may be missing for a network connection that only initiates associations.)"},{"Information Field":"TLS CipherSuite","Multiplicity":"0..N","Description":"The TLS CipherSuites that are supported on this particular connection. TLS CipherSuites shall be described using an RFC2246 string representation (e.g., \"TLS_RSA_WITH_RC4_128_SHA\")"},{"Information Field":"Installed","Multiplicity":"0..1","Description":"A Boolean value. True if the Network Connection is installed on the network. If not present, information about the installed status of the Network Connection is inherited from the device."}];