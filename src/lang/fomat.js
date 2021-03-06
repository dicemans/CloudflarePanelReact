const ja_JP = {
    'Remember me': '记住密码',
    'Log in': '登录',
    'Login': '登录',
    'Submitting': '正在提交中...',
    'Login successful': '登录成功！',
    'Login failed': '登录失败！',
    'Please input your Username!': '请输入您的用户名！',
    'Please input your Password!': '请输入您的密码！',
    // control
    'Overview': '概览',
    'SSL-TLS': 'SSL-TLS',
    'Firewall': '防火墙',
    'Page Rules': '页面规则',
    'Network': '网络',
    'Cache': '缓存',
    'Scrape Shield': '内容保护',
    'Switch successfully': '切换成功！',
    'Switching failed': '切换失败：{msg}',
    'Add domain name successfully': '添加域名成功',
    'Failed to add domain': '添加域名失败：{msg}',
    'Please input your Zone Name': '请输入您的域名！',
    'Zone Name': '域名',
    'Submit': '提交',
    'Zone': '域名',
    'Status': '状态',
    'Operation': '操作',

    'Record Type': '记录类型',
    'Host Name': '记录名',
    'Content': '记录值',
    'TTL': 'TTL',
    'Add a Dnsrecord': '添加记录',

    'Failed to load dns record': '加载dns记录失败！{msg}',
    'Added record successfully': '添加记录成功！',
    'Update record successfully': '更新记录成功',

    'Record Name': '记录名称',
    'Record Content': '记录内容',
    'CDN': 'CDN',
    'Please input your Record Name': '请输入您的记录名称',
    'Please input your Record Type': '请输入您的记录类型',
    'Please input your Record Content': '请输入您的记录内容',
    'Please input your TTL': '请输入您的TTL',
    'Please input your CDN': '请输入您的CDN',

    'Manage': '管理',
    'Update completed': '更新成功！',
    'Successfully deleted': '删除成功！',

    'You sure you want to delete it?': '确定要删除吗？',
    'Yes': '确定',
    'No': '不',
    'Cancel': '取消',

    'Enable HSTS (Strict-Transport-Security)': '启用 HSTS (Strict-Transport-Security)',
    'Provide HSTS headers for all HTTPS requests': '为所有 HTTPS 请求提供 HSTS 标头',
    'Maximum age header (max-age)': '最长期限标头 (max-age)',
    'Specify the duration of HSTS header caching in the browser': '指定 HSTS 标头在浏览器中缓存的持续时间',
    '0 (disabled)': '0（禁用）',
    'Apply HSTS policy to subdomains (includeSubDomains)': '将 HSTS 策略应用于子域 (includeSubDomains)',
    'Every domain under this domain will inherit the same HSTS header': '此域下的每个域将继承相同的 HSTS 标头',
    'Warning': '警告：',
    'If any of your subdomains do not support HTTPS, these subdomains will become inaccessible.': '如果您的任何子域不支持 HTTPS，这些子域将变为不可访问。',
    'Preloading': '预加载',
    'Allow browser to automatically preload HSTS configuration': '允许浏览器自动预加载 HSTS 配置',
    'Preloading may make websites that do not support HTTPS completely inaccessible.': '预加载可能会使不支持 HTTPS 的网站完全不可访问。',
    'Sniffless header': '无嗅探标头',
    'Send the "X-Content-Type-Options: nosniff" header to prevent Internet Explorer and Google Chrome from sniffing around in the declared Content-Type via MIME.': '发送 “X-Content-Type-Options: nosniff” 标头，来防止 Internet Explorer 和 Google Chrome 浏览器通过 MIME 在声明的 Content-Type 中四处嗅探。',
    'HTTP Strict Transport Security (HSTS)': 'HTTP 严格传输安全 (HSTS)',
    'You will need to specify the full path of the file.': '您将需要指定文件的完整路径。',
    '<p>HTTP Strict Transport Security (HSTS) can greatly improve the security of a website. However, when enabling HSTS, keep the following important considerations in mind:</p><strong>HTTPS (SSL) must be enabled to use HSTS. </strong><ul><li> If you turn on HSTS, but your website does not support HTTPS, the browser will not accept HSTS settings. </li><li>If you enable HSTS but leave Cloudflare, you need to continue to support HTTPS through a new service provider, otherwise, visitors will not be able to access your site until you support HTTPS. </li><li>If Cloudflare’s HTTPS is turned off after HSTS is enabled and there is no valid SSL certificate on the origin server, visitors will not be able to access your website. </li><li>Note: Cloudflare’s HTTP can be disabled in several ways: masking subdomains in DNS records, "suspending" Cloudflare services, or using a custom SSL certificate that is incorrectly configured on your Cloudflare dashboard (e.g. , Invalid SSL certificate, expired certificate, or mismatched hostname). </li></ul><p>If you need to disable HTTPS on your domain, you must first disable HSTS in your Cloudflare dashboard and wait until the maximum period has passed (to ensure that every browser is aware of this change) Before you can disable HTTPS. The average maximum period is six months (you can set the maximum period in the next step). If you delete HTTPS before disabling HSTS, visitors will not be able to access your site until the maximum period is reached or you support HTTPS again. Since disabling HTTPS on HSTS-enabled websites may cause these consequences, we strongly recommend that you deploy the HTTPS service before enabling this feature</p>'
        : '<div><p>HTTP 严格传输安全 (HTTP Strict Transport Security, HSTS) 可以大幅提高网站的安全性。但是，启用 HSTS 时，请谨记以下重要注意事项：</p><strong>必须启用 HTTPS (SSL) 才能使用 HSTS。</strong><ul><li>如果您打开 HSTS，但您的网站不支持 HTTPS，浏览器将不接受 HSTS 设置。</li><li>如果您启用了 HSTS 但离开了 Cloudflare，您需要通过新的服务提供商继续支持 HTTPS，否则，在您支持 HTTPS 之前，访问者将无法访问您的站点。</li><li>如果在启用 HSTS 后关闭了 Cloudflare 的 HTTPS，并且源服务器上没有有效的 SSL 证书，访问者将无法访问您的网站。</li><li>注意：可以通过以下几种方法禁用 Cloudflare 的 HTTP：在 DNS 记录中遮蔽子域，“暂停” Cloudflare 服务，或通过您的 Cloudflare 仪表板配置错误的自定义 SSL 证书（例如，无效的 SSL 证书、过期证书或不匹配的主机名）。</li></ul><p>如果您需要在域上禁用 HTTPS，必须先在您的 Cloudflare 仪表板中禁用 HSTS，并等到最长期限过去（以确保每个浏览器都知道此更改），然后才能禁用 HTTPS。平均最长期限为六个月（您可以在下一步中设置最长期限）。如果您在禁用 HSTS 之前删除了 HTTPS，访问者将无法访问您的网站，直至达到最长期限或您再次支持 HTTPS。由于在启用 HSTS 的网站上禁用 HTTPS 可能会导致这些后果，因此我们强烈建议您先部署 HTTPS 服务再启用此功能</p></div>)',
    'If not configured correctly, HTTP Strict Transport Security (HSTS) may make your website inaccessible for a long time.': '如果配置不正确，HTTP 严格传输安全 (HSTS) 可能会使您的网站长时间不可访问。',


    // cache
    'URL must not be empty': 'URL不得为空',
    'If your server is shut down, Cloudflare will use our cache to serve the static pages of your website.': '如果您的服务器关闭，Cloudflare 将使用我们的缓存为您的网站的静态页面提供服务。',
    'Temporarily bypass our cache to see the changes made to your origin server in real time. <br />Note: Enabling this feature can significantly speed up the loading speed of the origin server. The development mode does not clear the cache, so you need to clear the files after the development mode expires.': '暂时绕过我们的缓存可以实时查看对您的源服务器进行的更改。<br />注意：启用此功能可显著加快源服务器的加载速度。开发模式不会清除缓存，因此需要在开发模式过期后清除文件。',
    'Custom clear': '自定义清除',
    'Clear cache': '清除缓存',

    'Clear all caches, use with caution': '清理全部缓存，慎用',
    'Are you sure you want to clear all caches': '您确定要清理全部缓存吗？',
    'Clean up all': '清理全部',
    'Currently, wildcards are not supported when clearing a single URL. You can clear up to 30 URLs at once. Separate URLs one per line.': '目前进行单个 URL 清除时不支持通配符。您一次最多可以清除 30 个 URL。按照每行一个的方式分隔 URL。',
    'Example': '示例：',
    'Clear the cache files to force Cloudflare to extract the latest versions of these files from your web server. You can erase files selectively, or you can erase all files at the same time. <br /><strong>Note:</strong> Clearing the cache may temporarily degrade the performance of your website and increase the time it takes to load files on your origin server.'
        : '<div>清除缓存文件以强制 Cloudflare 从您的 Web 服务器中提取这些文件的最新版本。您可以选择性地清除文件，也可以同时清除所有文件。<br /><strong>注意：</strong>清除缓存可能会使您的网站性能暂时降级，并延长在您的源服务器上加载文件的时间。</div>',
    'Development Mode™': '开发模式™',
    'Cache level': '缓存级别',
    'No query string': '没有查询字符串',
    'Ignore query string': '忽略查询字符串',
    'Standard': '标准',
    'Determine the amount of static content you want Cloudflare to cache your website. Increasing the cache can shorten the page load time.': '确定您希望 Cloudflare 对您的网站进行缓存的静态内容量。增加缓存可以缩短页面加载时间。',
    'Browser cache TTL': '浏览器缓存 TTL',
    'Follow existing headers': '遵循现有标头',
    'Determine how long Cloudflare instructs visitors’ browsers to cache files. During this period, the browser will load files from its local cache, thereby improving page loading speed.': '确定 Cloudflare 指示访问者的浏览器缓存文件的时长。在此期间，浏览器会从其本地缓存中加载文件，从而提高页面加载速度。',
    // Netword
    'Speed up your website with HTTP/2': '使用 HTTP/2 加速您的网站',
    'Use QUIC to accelerate HTTP requests. QUIC provides higher encryption and performance than TCP and TLS.': '使用 QUIC 加速 HTTP 请求，QUIC 提供比 TCP 和 TLS 更高的加密和性能。',
    'Improve the performance of clients that have previously connected to your website.': '提高之前已连接到您网站的客户端的性能。',
    'Allow a WebSocket connection with your origin server. <br />Concurrent connection criteria applicable to your plan: low': '<div>允许与您的源服务器建立 WebSocket 连接。<br />适用于您所用计划的并发连接准则：low</div>',
    "Onion routing allows traffic from legitimate users on the Tor network to be routed through Cloudflare's onion service instead of exit nodes, thereby improving user privacy and achieving more detailed protection.": '洋葱路由允许通过 Cloudflare 的洋葱服务而不是退出节点路由来自 Tor 网络上合法用户的流量，从而改善用户的隐私并实现更细化的保护。',
    'Contains the country code of the visitor’s location and all requests sent to your website. <br /><strong>Note:</strong> You must retrieve the IP geolocation information from the CF-IPCountry HTTP header.': '包含访问者位置的国家/地区代码和所有发送到您网站的请求。<br /><strong>注意：</strong>您必须从 CF-IPCountry HTTP 标头减检索 IP 地理位置信息。',
    'HTTP/3 (using QUIC)': 'HTTP/3（使用 QUIC）',
    '0-RTT connection recovery': '0-RTT 连接恢复',
    'Onion routing': '洋葱路由',
    'IP geolocation': 'IP 地理位置',

    // Operation
    'Manage DNS': '管理DNS记录',
    'Delete': '删除',

    //Overview
    'Development model': '开发模式',
    'Quick operation': '快速操作',
    'Under Attack Mode': 'Under Attack 模式',
    'Temporarily bypass our cache. View changes made to your source server in real time.': '暂时绕过我们的缓存。实时查看对您的源服务器进行的更改。',
    'Close (Enterprise)': '关闭（Enterprise）',
    'Basic (essentially off)': '基本（本质上为关）',
    'low': '低',
    'medium': '中',
    'high': '高',
    'under_attack': '无敌',
    'Display JavaScript challenges when visitors visit your site.': '在访问者访问您的站点时显示 JavaScript 质询。',

    //PageRules
    'URL/description': 'URL/说明',
    'Failed to get page rules': '获取页面规则失败',
    'Page rules': '页面规则',
    '<div>Page rules are used to control which Cloudflare settings are triggered for a given URL. Only one page rule is triggered for each URL, so if you sort the page rules in order of priority, this is very useful. Please set the URL mode as specific as possible.<br />You have {number} page rules left.</div>'
        : '页面规则用于控制针对给定的 URL 触发哪些 Cloudflare 设置。针对每个 URL 仅触发一个页面规则，因此，如果您按照优先级顺序对页面规则进行排序，则这非常有用，请尽可能将 URL 模式设置得具体些。<br />您剩下 {number} 个页面规则。',
    // : '{number}',

    //ScrapeShield
    'Email address obfuscation technique': '电子邮件地址混淆技术',
    'Display an obfuscated email address on your website to prevent automated programs and spammers from obtaining it, while for human visitors, no visible changes will be made to the address.': '在您的网站上显示经过模糊处理的电子邮件地址，以防止机自动程序和垃圾邮件制造者获取该地址，而对于人类访问者，则不会对地址进行任何可见更改。',
    'Server side exclusion': '服务器端排除',
    'Automatically hide specific content to prevent visitors with a bad reputation from viewing': '自动隐藏特定内容以防声誉不好的访问者查看',
    'Hotlink protection': 'Hotlink 保护',
    'Prevent offsite links pointing to your images.': '防止站外链接指向您的图像。',

    //SslTls
    'Always use HTTPS': '始终使用 HTTPS',
    'Redirect all requests using the "http" scheme to "https". This will apply to all http requests in the area.': '将所有使用方案 “http” 的请求重定向到 “https”。这将应用于该区域的所有 http 请求。',
    'Random encryption': '随机加密',
    'Random encryption allows browsers to know that your site is provided through an encrypted connection, allowing them to benefit from the performance improvements of HTTP/2. The browser will continue to display "http" in the address bar instead of "https".': '随机加密可以让浏览器知道您的站点通过加密连接提供，从而让它们从 HTTP/2 的性能改进中受益。浏览器将继续在地址栏中显示 “http”，而不是 “https”。',
    'Automatic HTTPS rewrite': '自动 HTTPS 重写',
    'Automatic HTTPS rewriting helps correct mixed content by changing "http" to "https" for all resources or links on websites that can be served by HTTPS.': '自动 HTTPS 重写通过将可以使用 HTTPS 提供服务的网站上所有资源或链接的 “http” 更改为 “https” 来帮助修正混合内容。',
    'Your SSL/TLS encryption mode is {mode}': '您的 SSL/TLS 加密模式为 {mode}',
    'No encryption applied': '未应用加密',
    'Close (unsafe)': '关闭（不安全）',
    'Flexible': '灵活',
    'Encrypt the traffic between the browser and Cloudflare': '加密浏览器与 Cloudflare 之间的流量',
    'End-to-end encryption, using self-signed certificate on the server': '端到端加密，使用服务器上的自签名证书',
    'Full': '完全',
    'End-to-end encryption, but a trusted CA certificate or Cloudflare Origin CA certificate is required on the server': '端到端加密，但服务器上需要有受信任的 CA 证书或 Cloudflare Origin CA 证书',
    'Complete (strict)': '完全（严格）',
    'This setting was last changed': '此设置上次更改时间为',
    'Minimum TLS version': '最低 TLS 版本',
    'Only allow HTTPS connections from visitors who support the selected TLS protocol version or higher.': '仅允许来自支持所选 TLS 协议版本或更高版本的访问者的 HTTPS 连接。',
    'Click to switch': '点击切换',
    'Turn off HTTP Strict Transport Security (HSTS)': '关闭HTTP 严格传输安全 (HSTS)',
    'Enable HTTP Strict Transport Security (HSTS)': '启用HTTP 严格传输安全 (HSTS)',
    'Enforce web security policies on your website.': '对您的网站强制执行 Web 安全策略。',

    // Frame
    'Console': '控制台',
    'Domain management': '域名管理',
    'Domain list': '域名列表',
    'Add domain': '添加域名',
    'Visit Author': '访问作者博客',
    'Visit Cloudflare': '访问 Cloudflare',
    'Sign out': '退出登录',


    'Click close': '点击关闭',
    'Click to open': '点击开启',
    'No right to operate': '无权操作',
    // <FormattedMessage id='Manage'/>

}
let language = []
for (let k in ja_JP) {
    language.push(ja_JP[k])
}
console.log(JSON.stringify(language));

// ["记住密码","登录","登录","正在提交中...","登录成功！","登录失败！","请输入您的用户名！","请输入您的密码！","概览","SSL-TLS","防火墙","页面规则","网络","缓存","内容保护","切换成功！","切换失败：{msg}","添加域名成功","添加域名失败：{msg}","请输入您的域名！","域名","提交","域名","状态","操作","记录类型","记录名","记录值","TTL","添加记录","加载dns记录失败！{msg}","添加记录成功！","更新记录成功","记录名称","记录内容","CDN","请输入您的记录名称","请输入您的记录类型","请输入您的记录内容","请输入您的TTL","请输入您的CDN","管理","更新成功！","删除成功！","确定要删除吗？","确定","不","取消","启用 HSTS (Strict-Transport-Security)","为所有 HTTPS 请求提供 HSTS 标头","最长期限标头 (max-age)","指定 HSTS 标头在浏览器中缓存的持续时间","0（禁用）","将 HSTS 策略应用于子域 (includeSubDomains)","此域下的每个域将继承相同的 HSTS 标头","警告：","如果您的任何子域不支持 HTTPS，这些子域将变为不可访问。","预加载","允许浏览器自动预加载 HSTS 配置","预加载可能会使不支持 HTTPS 的网站完全不可访问。","无嗅探标头","发送 “X-Content-Type-Options: nosniff” 标头，来防止 Internet Explorer 和 Google Chrome 浏览器通过 MIME 在声明的 Content-Type 中四处嗅探。","HTTP 严格传输安全 (HSTS)","您将需要指定文件的完整路径。","<div><p>HTTP 严格传输安全 (HTTP Strict Transport Security, HSTS) 可以大幅提高网站的安全性。但是，启用 HSTS 时，请谨记以下重要注意事项：</p><strong>必须启用 HTTPS (SSL) 才能使用 HSTS。</strong><ul><li>如果您打开 HSTS，但您的网站不支持 HTTPS，浏览器将不接受 HSTS 设置。</li><li>如果您启用了 HSTS 但离开了 Cloudflare，您需要通过新的服务提供商继续支持 HTTPS，否则，在您支持 HTTPS 之前，访问者将无法访问您的站点。</li><li>如果在启用 HSTS 后关闭了 Cloudflare 的 HTTPS，并且源服务器上没有有效的 SSL 证书，访问者将无法访问您的网站。</li><li>注意：可以通过以下几种方法禁用 Cloudflare 的 HTTP：在 DNS 记录中遮蔽子域，“暂停” Cloudflare 服务，或通过您的 Cloudflare 仪表板配置错误的自定义 SSL 证书（例如，无效的 SSL 证书、过期证书或不匹配的主机名）。</li></ul><p>如果您需要在域上禁用 HTTPS，必须先在您的 Cloudflare 仪表板中禁用 HSTS，并等到最长期限过去（以确保每个浏览器都知道此更改），然后才能禁用 HTTPS。平均最长期限为六个月（您可以在下一步中设置最长期限）。如果您在禁用 HSTS 之前删除了 HTTPS，访问者将无法访问您的网站，直至达到最长期限或您再次支持 HTTPS。由于在启用 HSTS 的网站上禁用 HTTPS 可能会导致这些后果，因此我们强烈建议您先部署 HTTPS 服务再启用此功能</p></div>)","如果配置不正确，HTTP 严格传输安全 (HSTS) 可能会使您的网站长时间不可访问。","URL不得为空","如果您的服务器关闭，Cloudflare 将使用我们的缓存为您的网站的静态页面提供服务。","暂时绕过我们的缓存可以实时查看对您的源服务器进行的更改。<br />注意：启用此功能可显著加快源服务器的加载速度。开发模式不会清除缓存，因此需要在开发模式过期后清除文件。","自定义清除","清除缓存","清理全部缓存，慎用","您确定要清理全部缓存吗？","清理全部","目前进行单个 URL 清除时不支持通配符。您一次最多可以清除 30 个 URL。按照每行一个的方式分隔 URL。","示例：","<div>清除缓存文件以强制 Cloudflare 从您的 Web 服务器中提取这些文件的最新版本。您可以选择性地清除文件，也可以同时清除所有文件。<br /><strong>注意：</strong>清除缓存可能会使您的网站性能暂时降级，并延长在您的源服务器上加载文件的时间。</div>","开发模式™","缓存级别","没有查询字符串","忽略查询字符串","标准","确定您希望 Cloudflare 对您的网站进行缓存的静态内容量。增加缓存可以缩短页面加载时间。","浏览器缓存 TTL","遵循现有标头","确定 Cloudflare 指示访问者的浏览器缓存文件的时长。在此期间，浏览器会从其本地缓存中加载文件，从而提高页面加载速度。","使用 HTTP/2 加速您的网站","使用 QUIC 加速 HTTP 请求，QUIC 提供比 TCP 和 TLS 更高的加密和性能。","提高之前已连接到您网站的客户端的性能。","<div>允许与您的源服务器建立 WebSocket 连接。<br />适用于您所用计划的并发连接准则：low</div>","洋葱路由允许通过 Cloudflare 的洋葱服务而不是退出节点路由来自 Tor 网络上合法用户的流量，从而改善用户的隐私并实现更细化的保护。","包含访问者位置的国家/地区代码和所有发送到您网站的请求。<br /><strong>注意：</strong>您必须从 CF-IPCountry HTTP 标头减检索 IP 地理位置信息。","HTTP/3（使用 QUIC）","0-RTT 连接恢复","洋葱路由","IP 地理位置","管理DNS记录","删除","开发模式","快速操作","Under Attack 模式","暂时绕过我们的缓存。实时查看对您的源服务器进行的更改。","关闭（Enterprise）","基本（本质上为关）","低","中","高","无敌","在访问者访问您的站点时显示 JavaScript 质询。","URL/说明","获取页面规则失败","页面规则","页面规则用于控制针对给定的 URL 触发哪些 Cloudflare 设置。针对每个 URL 仅触发一个页面规则，因此，如果您按照优先级顺序对页面规则进行排序，则这非常有用，请尽可能将 URL 模式设置得具体些。<br />您剩下 {number} 个页面规则。","电子邮件地址混淆技术","在您的网站上显示经过模糊处理的电子邮件地址，以防止机自动程序和垃圾邮件制造者获取该地址，而对于人类访问者，则不会对地址进行任何可见更改。","服务器端排除","自动隐藏特定内容以防声誉不好的访问者查看","Hotlink 保护","防止站外链接指向您的图像。","始终使用 HTTPS","将所有使用方案 “http” 的请求重定向到 “https”。这将应用于该区域的所有 http 请求。","随机加密","随机加密可以让浏览器知道您的站点通过加密连接提供，从而让它们从 HTTP/2 的性能改进中受益。浏览器将继续在地址栏中显示 “http”，而不是 “https”。","自动 HTTPS 重写","自动 HTTPS 重写通过将可以使用 HTTPS 提供服务的网站上所有资源或链接的 “http” 更改为 “https” 来帮助修正混合内容。","您的 SSL/TLS 加密模式为 {mode}","未应用加密","关闭（不安全）","灵活","加密浏览器与 Cloudflare 之间的流量","端到端加密，使用服务器上的自签名证书","完全","端到端加密，但服务器上需要有受信任的 CA 证书或 Cloudflare Origin CA 证书","完全（严格）","此设置上次更改时间为","最低 TLS 版本","仅允许来自支持所选 TLS 协议版本或更高版本的访问者的 HTTPS 连接。","点击切换","关闭HTTP 严格传输安全 (HSTS)","启用HTTP 严格传输安全 (HSTS)","对您的网站强制执行 Web 安全策略。","控制台","域名管理","域名列表","添加域名","访问作者博客","访问 Cloudflare","退出登录","点击关闭","点击开启","无权操作"]