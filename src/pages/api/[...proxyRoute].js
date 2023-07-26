// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import proxy from '../../proxy.js'

export default async function handler(req, res) {
    // console.log("Dynamic Route HEaders", req.headers)
    await proxy(req, res, (err) => {
        if (err) {
            console.log("error called in the proxy call itself");
            throw err;
        }
        throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
    });
    return 
}
