function FindProxyForURL(url, host)
{
    if (dnsDomainIs(host, "vpn.shidou.com") {
        return "DIRECT";
    }
    return "SOCKS 127.0.0.1:7070";
}
