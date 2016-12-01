// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/connect-flash/connect-flash.d.ts
declare namespace Express {
    export interface Request {
        flash(message: string): any;
        flash(event: string, message: string): any;
    }
}

declare module "connect-flash" {
    import express = require('express');
    interface IConnectFlashOptions {
        unsafe?: boolean;
    }
    function e(options?: IConnectFlashOptions): express.RequestHandler;
    export = e;
}