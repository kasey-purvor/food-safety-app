import { createProxyMiddleware, responseInterceptor } from "http-proxy-middleware";

const pathRewrite = (path, req) => {
    return path.replace("/api", "");
};
const proxyResHAndler = (proxyRes, req, res) => {
    const pathName = req.url;
    console.log("PROXY PATHNAME", pathName);
    console.log("Request Headers", req.headers);

    var data = [];
    proxyRes.on("data", (chunk) => {
        // console.log("concating data");
        data.push(chunk);
    });
    proxyRes.on("end", () => {
        // console.log("end of data event hit ");
        let decompressedData = "";
        const concattedData = Buffer.concat(data);
        // console.log("hex String data", concattedData.toString("hex"))
        console.log("concatted data", concattedData);
        console.log(concattedData.toString("hex"))
        const gzipCheck = concattedData.toString("hex").slice(0, 4);
        console.log("gzipped data check? 1f8b?: ", gzipCheck);
        gzipCheck === "1f8b" ? (decompressedData = zlib.gunzipSync(concattedData)) : (decompressedData = concattedData);

        // console.log("decompressed Data in JSON form utf8", decompressedData.toString("utf8"))
        const dataJSON = JSON.parse(decompressedData.toString("utf8"));
        // console.log("Data has been turned into JSON ", dataJSON);
        dataJSON ? console.log("proxy server:  data was returned from backend API") : null;
 
        res.send(dataJSON);
    });
};

const proxy = createProxyMiddleware({
    target: 'https://api1-ratings.food.gov.uk',
    timeout: 10000,
    proxyTimeout: 10000,
    logger: console,
    autoRewrite: true,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
        Object.keys(req.headers).forEach(key => {
          proxyReq.setHeader(key, req.headers[key]);
        });
      },
    selfHandleResponse: true,
    headers: {
        // "auth-token": token,
        // 'x-invoke-path': '/enhanced-search/en-GB/%5e/%5e/alpha/1/%5e/LessThanOrEqual3/1/1/5000/json',
    },
    pathRewrite: pathRewrite,
    onProxyRes: proxyResHAndler,
    on: {
        error: (err, req, res) => {
            console.log("error", err);
            console.log("req headers", req.headers);
            console.log("res headers", res.headers);
        },
    },
});
export default proxy;
