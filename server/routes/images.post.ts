import formidable, { errors as formidableErrors } from 'formidable';

export default eventHandler(async (event) => {

    const form = formidable({});
    let fields;
    let files;
    try {
        [fields, files] = await form.parse(event.node.req);
    } catch (err: any) {
        // example to check for a very specific error
        if (err.code === formidableErrors.maxFieldsExceeded) {

        }
        console.error(err);
        event.node.res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
        event.node.res.end(String(err));
        return;
    }
    event.node.res.writeHead(200, { 'Content-Type': 'application/json' });
    event.node.res.end(JSON.stringify({ fields, files }, null, 2));
    return;

})