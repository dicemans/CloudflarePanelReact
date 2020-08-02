const en_US = {
    "Remember me": "Remember me",
    "Log in": "Log in",
    "Login": "Login",
    "Submitting": "Submitting",
    "Login successful": "Login successful",
    "Login failed": "Login failed",
    "Please input your Username!": "Please input your Username!",
    "Please input your Password!": "Please input your Password!",
    "Overview": "Overview",
    "SSL-TLS": "SSL-TLS",
    "Firewall": "Firewall",
    "Page Rules": "Page Rules",
    "Network": "Network",
    "Cache": "Cache",
    "Scrape Shield": "Scrape Shield",
    "Switch successfully": "Switch successfully",
    "Switching failed": "Switching failed",
    "Add domain name successfully": "Add domain name successfully",
    "Failed to add domain": "Failed to add domain",
    "Please input your Zone Name": "Please input your Zone Name",
    "Zone Name": "Zone Name",
    "Submit": "Submit",
    "Zone": "Zone",
    "Status": "Status",
    "Operation": "Operation",
    "Record Type": "Record Type",
    "Host Name": "Host Name",
    "Content": "Content",
    "TTL": "TTL",
    "Add a Dnsrecord": "Add a Dnsrecord",
    "Failed to load dns record": "Failed to load dns record",
    "Added record successfully": "Added record successfully",
    "Update record successfully": "Update record successfully",
    "Record Name": "Record Name",
    "Record Content": "Record Content",
    "CDN": "CDN",
    "Please input your Record Name": "Please input your Record Name",
    "Please input your Record Type": "Please input your Record Type",
    "Please input your Record Content": "Please input your Record Content",
    "Please input your TTL": "Please input your TTL",
    "Please input your CDN": "Please input your CDN",
    "Manage": "Manage",
    "Update completed": "Update completed",
    "Successfully deleted": "Successfully deleted",
    "You sure you want to delete it?": "You sure you want to delete it?",
    "Yes": "Yes",
    "No": "No",
    "Cancel": "Cancel",
    "Enable HSTS (Strict-Transport-Security)": "Enable HSTS (Strict-Transport-Security)",
    "Provide HSTS headers for all HTTPS requests": "Provide HSTS headers for all HTTPS requests",
    "Maximum age header (max-age)": "Maximum age header (max-age)",
    "Specify the duration of HSTS header caching in the browser": "Specify the duration of HSTS header caching in the browser",
    "0 (disabled)": "0 (disabled)",
    "Apply HSTS policy to subdomains (includeSubDomains)": "Apply HSTS policy to subdomains (includeSubDomains)",
    "Every domain under this domain will inherit the same HSTS header": "Every domain under this domain will inherit the same HSTS header",
    "Warning": "Warning",
    "If any of your subdomains do not support HTTPS, these subdomains will become inaccessible.": "If any of your subdomains do not support HTTPS, these subdomains will become inaccessible.",
    "Preloading": "Preloading",
    "Allow browser to automatically preload HSTS configuration": "Allow browser to automatically preload HSTS configuration",
    "Preloading may make websites that do not support HTTPS completely inaccessible.": "Preloading may make websites that do not support HTTPS completely inaccessible.",
    "Sniffless header": "Sniffless header",
    "Send the \"X-Content-Type-Options: nosniff\" header to prevent Internet Explorer and Google Chrome from sniffing around in the declared Content-Type via MIME.": "Send the \"X-Content-Type-Options: nosniff\" header to prevent Internet Explorer and Google Chrome from sniffing around in the declared Content-Type via MIME.",
    "HTTP Strict Transport Security (HSTS)": "HTTP Strict Transport Security (HSTS)",
    "You will need to specify the full path of the file.": "You will need to specify the full path of the file.",
    "<p>HTTP Strict Transport Security (HSTS) can greatly improve the security of a website. However, when enabling HSTS, keep the following important considerations in mind:</p><strong>HTTPS (SSL) must be enabled to use HSTS. </strong><ul><li> If you turn on HSTS, but your website does not support HTTPS, the browser will not accept HSTS settings. </li><li>If you enable HSTS but leave Cloudflare, you need to continue to support HTTPS through a new service provider, otherwise, visitors will not be able to access your site until you support HTTPS. </li><li>If Cloudflare’s HTTPS is turned off after HSTS is enabled and there is no valid SSL certificate on the origin server, visitors will not be able to access your website. </li><li>Note: Cloudflare’s HTTP can be disabled in several ways: masking subdomains in DNS records, \"suspending\" Cloudflare services, or using a custom SSL certificate that is incorrectly configured on your Cloudflare dashboard (e.g. , Invalid SSL certificate, expired certificate, or mismatched hostname). </li></ul><p>If you need to disable HTTPS on your domain, you must first disable HSTS in your Cloudflare dashboard and wait until the maximum period has passed (to ensure that every browser is aware of this change) Before you can disable HTTPS. The average maximum period is six months (you can set the maximum period in the next step). If you delete HTTPS before disabling HSTS, visitors will not be able to access your site until the maximum period is reached or you support HTTPS again. Since disabling HTTPS on HSTS-enabled websites may cause these consequences, we strongly recommend that you deploy the HTTPS service before enabling this feature</p>": "<p>HTTP Strict Transport Security (HSTS) can greatly improve the security of a website. However, when enabling HSTS, keep the following important considerations in mind:</p><strong>HTTPS (SSL) must be enabled to use HSTS. </strong><ul><li> If you turn on HSTS, but your website does not support HTTPS, the browser will not accept HSTS settings. </li><li>If you enable HSTS but leave Cloudflare, you need to continue to support HTTPS through a new service provider, otherwise, visitors will not be able to access your site until you support HTTPS. </li><li>If Cloudflare’s HTTPS is turned off after HSTS is enabled and there is no valid SSL certificate on the origin server, visitors will not be able to access your website. </li><li>Note: Cloudflare’s HTTP can be disabled in several ways: masking subdomains in DNS records, \"suspending\" Cloudflare services, or using a custom SSL certificate that is incorrectly configured on your Cloudflare dashboard (e.g. , Invalid SSL certificate, expired certificate, or mismatched hostname). </li></ul><p>If you need to disable HTTPS on your domain, you must first disable HSTS in your Cloudflare dashboard and wait until the maximum period has passed (to ensure that every browser is aware of this change) Before you can disable HTTPS. The average maximum period is six months (you can set the maximum period in the next step). If you delete HTTPS before disabling HSTS, visitors will not be able to access your site until the maximum period is reached or you support HTTPS again. Since disabling HTTPS on HSTS-enabled websites may cause these consequences, we strongly recommend that you deploy the HTTPS service before enabling this feature</p>",
    "If not configured correctly, HTTP Strict Transport Security (HSTS) may make your website inaccessible for a long time.": "If not configured correctly, HTTP Strict Transport Security (HSTS) may make your website inaccessible for a long time.",
    "URL must not be empty": "URL must not be empty",
    "If your server is shut down, Cloudflare will use our cache to serve the static pages of your website.": "If your server is shut down, Cloudflare will use our cache to serve the static pages of your website.",
    "Temporarily bypass our cache to see the changes made to your origin server in real time. <br />Note: Enabling this feature can significantly speed up the loading speed of the origin server. The development mode does not clear the cache, so you need to clear the files after the development mode expires.": "Temporarily bypass our cache to see the changes made to your origin server in real time. <br />Note: Enabling this feature can significantly speed up the loading speed of the origin server. The development mode does not clear the cache, so you need to clear the files after the development mode expires.",
    "Custom clear": "Custom clear",
    "Clear cache": "Clear cache",
    "Clear all caches, use with caution": "Clear all caches, use with caution",
    "Are you sure you want to clear all caches": "Are you sure you want to clear all caches",
    "Clean up all": "Clean up all",
    "Currently, wildcards are not supported when clearing a single URL. You can clear up to 30 URLs at once. Separate URLs one per line.": "Currently, wildcards are not supported when clearing a single URL. You can clear up to 30 URLs at once. Separate URLs one per line.",
    "Example": "Example",
    "Clear the cache files to force Cloudflare to extract the latest versions of these files from your web server. You can erase files selectively, or you can erase all files at the same time. <br /><strong>Note:</strong> Clearing the cache may temporarily degrade the performance of your website and increase the time it takes to load files on your origin server.": "Clear the cache files to force Cloudflare to extract the latest versions of these files from your web server. You can erase files selectively, or you can erase all files at the same time. <br /><strong>Note:</strong> Clearing the cache may temporarily degrade the performance of your website and increase the time it takes to load files on your origin server.",
    "Development Mode™": "Development Mode™",
    "Cache level": "Cache level",
    "No query string": "No query string",
    "Ignore query string": "Ignore query string",
    "Standard": "Standard",
    "Determine the amount of static content you want Cloudflare to cache your website. Increasing the cache can shorten the page load time.": "Determine the amount of static content you want Cloudflare to cache your website. Increasing the cache can shorten the page load time.",
    "Browser cache TTL": "Browser cache TTL",
    "Follow existing headers": "Follow existing headers",
    "Determine how long Cloudflare instructs visitors’ browsers to cache files. During this period, the browser will load files from its local cache, thereby improving page loading speed.": "Determine how long Cloudflare instructs visitors’ browsers to cache files. During this period, the browser will load files from its local cache, thereby improving page loading speed.",
    "Speed up your website with HTTP/2": "Speed up your website with HTTP/2",
    "Use QUIC to accelerate HTTP requests. QUIC provides higher encryption and performance than TCP and TLS.": "Use QUIC to accelerate HTTP requests. QUIC provides higher encryption and performance than TCP and TLS.",
    "Improve the performance of clients that have previously connected to your website.": "Improve the performance of clients that have previously connected to your website.",
    "Allow a WebSocket connection with your origin server. <br />Concurrent connection criteria applicable to your plan: low": "Allow a WebSocket connection with your origin server. <br />Concurrent connection criteria applicable to your plan: low",
    "Onion routing allows traffic from legitimate users on the Tor network to be routed through Cloudflare's onion service instead of exit nodes, thereby improving user privacy and achieving more detailed protection.": "Onion routing allows traffic from legitimate users on the Tor network to be routed through Cloudflare's onion service instead of exit nodes, thereby improving user privacy and achieving more detailed protection.",
    "Contains the country code of the visitor’s location and all requests sent to your website. <br /><strong>Note:</strong> You must retrieve the IP geolocation information from the CF-IPCountry HTTP header.": "Contains the country code of the visitor’s location and all requests sent to your website. <br /><strong>Note:</strong> You must retrieve the IP geolocation information from the CF-IPCountry HTTP header.",
    "HTTP/3 (using QUIC)": "HTTP/3 (using QUIC)",
    "0-RTT connection recovery": "0-RTT connection recovery",
    "Onion routing": "Onion routing",
    "IP geolocation": "IP geolocation",
    "Manage DNS": "Manage DNS",
    'Copy cname record': 'Copy cname record',
    "Copy successfully": "Copy successfully",
    "Delete": "Delete",
    "Development model": "Development model",
    "Quick operation": "Quick operation",
    "Under Attack Mode": "Under Attack Mode",
    "Temporarily bypass our cache. View changes made to your source server in real time.": "Temporarily bypass our cache. View changes made to your source server in real time.",
    "Close (Enterprise)": "Close (Enterprise)",
    "Basic (essentially off)": "Basic (essentially off)",
    "low": "low",
    "medium": "medium",
    "high": "high",
    "under_attack": "under_attack",
    "Display JavaScript challenges when visitors visit your site.": "Display JavaScript challenges when visitors visit your site.",
    "URL/description": "URL/description",
    "Failed to get page rules": "Failed to get page rules",
    "Page rules": "Page rules",
    "<div>Page rules are used to control which Cloudflare settings are triggered for a given URL. Only one page rule is triggered for each URL, so if you sort the page rules in order of priority, this is very useful. Please set the URL mode as specific as possible.<br />You have {number} page rules left.</div>": "<div>Page rules are used to control which Cloudflare settings are triggered for a given URL. Only one page rule is triggered for each URL, so if you sort the page rules in order of priority, this is very useful. Please set the URL mode as specific as possible.<br />You have {number} page rules left.</div>",
    "Email address obfuscation technique": "Email address obfuscation technique",
    "Display an obfuscated email address on your website to prevent automated programs and spammers from obtaining it, while for human visitors, no visible changes will be made to the address.": "Display an obfuscated email address on your website to prevent automated programs and spammers from obtaining it, while for human visitors, no visible changes will be made to the address.",
    "Server side exclusion": "Server side exclusion",
    "Automatically hide specific content to prevent visitors with a bad reputation from viewing": "Automatically hide specific content to prevent visitors with a bad reputation from viewing",
    "Hotlink protection": "Hotlink protection",
    "Prevent offsite links pointing to your images.": "Prevent offsite links pointing to your images.",
    "Always use HTTPS": "Always use HTTPS",
    "Redirect all requests using the \"http\" scheme to \"https\". This will apply to all http requests in the area.": "Redirect all requests using the \"http\" scheme to \"https\". This will apply to all http requests in the area.",
    "Random encryption": "Random encryption",
    "Random encryption allows browsers to know that your site is provided through an encrypted connection, allowing them to benefit from the performance improvements of HTTP/2. The browser will continue to display \"http\" in the address bar instead of \"https\".": "Random encryption allows browsers to know that your site is provided through an encrypted connection, allowing them to benefit from the performance improvements of HTTP/2. The browser will continue to display \"http\" in the address bar instead of \"https\".",
    "Automatic HTTPS rewrite": "Automatic HTTPS rewrite",
    "Automatic HTTPS rewriting helps correct mixed content by changing \"http\" to \"https\" for all resources or links on websites that can be served by HTTPS.": "Automatic HTTPS rewriting helps correct mixed content by changing \"http\" to \"https\" for all resources or links on websites that can be served by HTTPS.",
    "Your SSL/TLS encryption mode is {mode}": "Your SSL/TLS encryption mode is {mode}",
    "No encryption applied": "No encryption applied",
    "Close (unsafe)": "Close (unsafe)",
    "Flexible": "Flexible",
    "Encrypt the traffic between the browser and Cloudflare": "Encrypt the traffic between the browser and Cloudflare",
    "End-to-end encryption, using self-signed certificate on the server": "End-to-end encryption, using self-signed certificate on the server",
    "Full": "Full",
    "End-to-end encryption, but a trusted CA certificate or Cloudflare Origin CA certificate is required on the server": "End-to-end encryption, but a trusted CA certificate or Cloudflare Origin CA certificate is required on the server",
    "Complete (strict)": "Complete (strict)",
    "This setting was last changed": "This setting was last changed",
    "Minimum TLS version": "Minimum TLS version",
    "Only allow HTTPS connections from visitors who support the selected TLS protocol version or higher.": "Only allow HTTPS connections from visitors who support the selected TLS protocol version or higher.",
    "Click to switch": "Click to switch",
    "Turn off HTTP Strict Transport Security (HSTS)": "Turn off HTTP Strict Transport Security (HSTS)",
    "Enable HTTP Strict Transport Security (HSTS)": "Enable HTTP Strict Transport Security (HSTS)",
    "Enforce web security policies on your website.": "Enforce web security policies on your website.",
    "Console": "Console",
    "Domain management": "Domain management",
    "Domain list": "Domain list",
    "Add domain": "Add domain",
    "Visit Author": "Visit Author",
    "Visit Cloudflare": "Visit Cloudflare",
    "Sign out": "Sign out",
    "Click close": "Click close",
    "Click to open": "Click to open",
    "No right to operate": "No right to operate"
}
export default en_US